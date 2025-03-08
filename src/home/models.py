from django.db import models

from wagtail.fields import RichTextField
from wagtail.models import Page, ValidationError 
from wagtail.admin.panels import FieldPanel,HelpPanel ,InlinePanel, MultipleChooserPanel,MultiFieldPanel,FieldRowPanel, ObjectList, PageChooserPanel, TabbedInterface, TitleFieldPanel
from wagtail.admin.forms import WagtailAdminModelForm,WagtailAdminPageForm
from .widgets import ReactWidgetMultiplier, ReactWidgetPassenger, ReactWidgetPassengerInfante, ReactWidgetPassengerMenor, ReactWidgetPrice, ReactWidgetPriceInfante, ReactWidgetPriceMenor, ReactWidgetRangeWrapper, ReactWidgetSubFieldPrice, ReactWidgetSubFieldSubPrice
# from .panels import PriceSnippetPanel, ReactPriceMultiplierComponent
from wagtail.snippets.views.snippets import SnippetViewSet
from wagtail.admin.ui.tables import DateColumn, UpdatedAtColumn
from wagtail.snippets.models import register_snippet
from django import forms
from wagtail.models import TranslatableMixin,BootstrapTranslatableMixin
from django.utils.translation import gettext, gettext_lazy
from urllib.parse import quote
# Create your models here.


class Home(Page):
    body = RichTextField(blank=True)
    content_panels = Page.content_panels + [
        # TitleFieldPanel('title', placeholder="Titulo del Paquete",help_text="El titulo sera incluido en la parte superior"),
        FieldPanel('body'),
    ]

    subpage_types = ['home.Global']
    api_fields = [
        
    ]

    page_description = "Sitio cms wagtail"

class CustomValidateForm(WagtailAdminModelForm):
    def clean(self):
        cleaned_data = super().clean()
        print(cleaned_data)
        print(dir(cleaned_data))
        print(self.fields)
 

class Global(Page):
    body = RichTextField(blank=True)
    parent_page_types = ['home.Home']
    max_count_per_parent = 1
    content_panels = Page.content_panels + [
        # TitleFieldPanel('title', placeholder="Titulo del Paquete",help_text="El titulo sera incluido en la parte superior"),
        FieldPanel('body'),
    ]

def remove_com_from_email(email):
    if email.endswith('.com'):
        return email.replace('.com', '')
    return email

class DataPasajero(models.Model):
    namePassenger = models.CharField(max_length=500,verbose_name = "Nombre del Pasajero")
    email = models.EmailField(max_length=500, verbose_name = "Correo Electronico",unique=False) 
    namePaquete = models.CharField(max_length=500,verbose_name = "Nombre del Paquete")
    unitaryPrice = models.DecimalField(max_digits=6, decimal_places=2,verbose_name="Precio Adulto")
    unitaryPriceMenor = models.DecimalField(max_digits=6, decimal_places=2,verbose_name="Precio Menor")
    unitaryPriceInfante = models.DecimalField(max_digits=6, decimal_places=2,verbose_name="Precio Infante")
    numPasajeros = models.IntegerField(verbose_name="Numero de Pasajeros Adultos")
    numPasajerosMenor = models.IntegerField(verbose_name="Numero de Pasajeros Menores")
    numPasajerosInfante = models.IntegerField(verbose_name="Numero de Pasajeros Infantes")
    finalPrice = models.DecimalField(max_digits=6, decimal_places=2,verbose_name="Precio Final")
    percentaje = models.IntegerField(verbose_name="Porcentage")
    unitaryPriceSub1 = models.DecimalField(max_digits=6, decimal_places=2,verbose_name="Precio Final a Pagar")
    unitaryPriceSub2 = models.DecimalField(max_digits=6, decimal_places=2,verbose_name="Precio Final por Pagar")
    referiCode = models.CharField(max_length=500,verbose_name = "Codigo de Referido")
    _created_at = models.DateTimeField(auto_now_add=True,null=True)
    # class Meta(BootstrapTranslatableMixin.Meta):
    #     verbose_name = 'DataPasajero'

    PAYMENT_CHOICES = [
        ('pendiente', 'Pendiente'),
        ('izipay', 'Izipay'),
        ('paypal', 'Paypal'),
    ]
    
    status = models.CharField(
        max_length=20,          # Longitud máxima del campo
        choices=PAYMENT_CHOICES, # Opciones predefinidas
        default='pendiente'     # Valor por defecto
    )
    link = models.CharField(
        max_length=500,
        verbose_name="Link Creado",
        # editable=False,  # Hace que no se pueda modificar directamente en el modelo
        blank=True,  # Permite que sea vacío al guardar inicialmente
    )
    panels = [
    ]
    # base_form_class = CustomValidateForm

    
    def save(self,*args,**kwargs):
        super().save(*args,**kwargs)
        URLparams = (('namePaquete',quote(self.namePaquete)),
                     ('namePassenger',quote(self.namePassenger)),
                     ('email',remove_com_from_email(self.email)),
                     ('unitaryPrice',self.unitaryPrice),
                     ('unitaryPrice2',self.unitaryPriceMenor),
                     ('unitaryPrice3',self.unitaryPriceInfante),
                     ('numPasajeros',self.numPasajeros),
                     ('numPasajeros2',self.numPasajerosMenor),
                     ('numPasajeros3',self.numPasajerosInfante),
                     ('finalPrice',self.finalPrice),
                     ('percentage',self.percentaje),
                     ('unitaryPriceSub1',self.unitaryPriceSub1),
                     ('unitaryPriceSub2',self.unitaryPriceSub2),
                     ('referiCode',quote(self.referiCode)),
                     ('id',self.id))
        res = ["=".join(map(str, param)) for param in URLparams]
        newLink = f"https://payment.pdsviajes.com/?{'&'.join(res)}"
        self.link = newLink
        super().save(*args, **kwargs)
    def __str__(self):
        return self.namePaquete

class CreatedAtColumn(DateColumn):
    """Outputs the _updated_at date annotation in human-readable format"""

    def __init__(self, **kwargs):
        super().__init__(
            "_created_at",
            label=kwargs.pop("label", gettext("Created")),
            sort_key=kwargs.pop("sort_key", "_created_at"),
            **kwargs,
        )




class DataPasajeroViewSet(SnippetViewSet):
    model = DataPasajero
    icon = "tag"
    list_display = ["namePassenger", "namePaquete","email",CreatedAtColumn(),UpdatedAtColumn(),"status"]
    list_per_page = 50
    add_to_admin_menu = True
    menu_order = 100
    copy_view_enabled = False
    inspect_view_enabled = True
    admin_url_namespace = "dataPasajeros_views"
    base_url_path = "internal/dataPasajeros"
    # alternatively, you can use the following instead of filterset_class
    # list_filter = ["shirt_size"]
    # or
    list_filter = {"namePassenger": ["icontains"],"email":["icontains"],"namePaquete":["icontains"],"unitaryPrice":["lt","gt"]}
    edit_handler = TabbedInterface([
        ObjectList([FieldPanel("namePassenger"),FieldPanel("email"),FieldPanel("namePaquete"),FieldPanel("unitaryPrice",widget=ReactWidgetPrice()),FieldPanel("unitaryPriceMenor",widget=ReactWidgetPriceMenor()),FieldPanel("unitaryPriceInfante",widget=ReactWidgetPriceInfante()),FieldPanel("numPasajeros",widget=ReactWidgetPassenger()),FieldPanel("numPasajerosMenor",widget=ReactWidgetPassengerMenor()),FieldPanel("numPasajerosInfante",widget=ReactWidgetPassengerInfante()),FieldPanel("finalPrice",widget=ReactWidgetMultiplier()),FieldPanel("percentaje",widget=ReactWidgetRangeWrapper()),FieldPanel("unitaryPriceSub1",widget=ReactWidgetSubFieldPrice()),FieldPanel("unitaryPriceSub2",widget=ReactWidgetSubFieldSubPrice()) ,FieldPanel("referiCode"),FieldPanel('link',widget=forms.TextInput(attrs={'disabled': 'disabled'}))], heading="Informacion General"),
    ])

register_snippet(DataPasajeroViewSet)


class DataGeneral(models.Model):
    terminosyCondiciones = RichTextField(blank=True,verbose_name="Terminos y Condiciones")
    
    def save(self, *args, **kwargs):
        # Asegurarse de que solo hay una instancia
        if not self.pk and DataGeneral.objects.exists():
            raise ValidationError('Solo puede existir una instancia de SiteSettings.')
        return super().save(*args, **kwargs)

    def __str__(self): 
        return "Informacion General"

class Apis(models.Model):
    idTienda = models.CharField(max_length=255,verbose_name = "Id tienda")
    password = models.CharField(max_length=255,verbose_name = "Password Tienda")
    # hmacSha256 = models.CharField(max_length=255,verbose_name = "Clave HMAC-SHA-256 ")
    paypalClientId = models.CharField(max_length=255,verbose_name = "Client ID Paypal")
    paypalSecret = models.CharField(max_length=255,verbose_name = "Secret Paypal")
    paypalUrl = models.CharField(max_length=255,verbose_name = "URL Paypal")
    
    def save(self, *args, **kwargs):
        # Asegurarse de que solo hay una instancia
        if not self.pk and Apis.objects.exists():
            raise ValidationError('Solo puede existir una instancia de SiteSettings.')
        return super().save(*args, **kwargs)

    def __str__(self): 
        return "Apis privadas"


class DataGeneralViewSet(SnippetViewSet):
    model= DataGeneral
    icon = "tag"
    list_display = ["terminosyCondiciones",UpdatedAtColumn()]
    list_per_page = 1
    add_to_admin_menu = True
    menu_order = 550
    menu_label = "Data General"
    inspect_view_enabled = True
    admin_url_namespace = "dataGeneral_views"
    base_url_path = "internal/dataGeneral"
    edit_handler = TabbedInterface([
        ObjectList([FieldPanel('terminosyCondiciones')],heading="Data")
    ])

class ApisViewSet(SnippetViewSet):
    model= Apis
    icon = "tag"
    list_display = ["idTienda",UpdatedAtColumn()]
    list_per_page = 1
    add_to_admin_menu = True
    menu_order = 550
    menu_label = "Apis"
    inspect_view_enabled = True
    admin_url_namespace = "apis_views"
    base_url_path = "internal/apis"
    edit_handler = TabbedInterface([
        ObjectList([HelpPanel(
            content="Aqui se modifican las apis proporcionadas por Izipay , Paypal. Intercambiar a apis test para hacer pruebas, apis producion para que funcione ,para que tengan efectos los cambios, esperar 3-5 min, para el build de la interfaz del cliente"
        ),FieldPanel('idTienda'),FieldPanel('password'),FieldPanel("paypalClientId"),FieldPanel("paypalSecret"),FieldPanel("paypalUrl")],heading="Data")
    ])

register_snippet(DataGeneralViewSet)

register_snippet(ApisViewSet)












# from django.forms.widgets import NumberInput
# from wagtail.admin.panels import Media
# # from wagtail.admin.widgets import 
# from django.utils.safestring import mark_safe

# class PriceMultWidget(NumberInput):
#     template_name = "PriceComponent/price_snippet.html"
#     def __init__(self, attrs=None):
#         super().__init__(attrs=attrs)


#     def build_attrs(self, *args, **kwargs):
#         attrs = super().build_attrs(*args, **kwargs)
#         return attrs

#     @property
#     def media(self):
#         return Media(
#                 js = ["js/components-library.umd.js"],
#                 css = ["js/library.css"]
#         )


from django.forms.widgets import Widget,NumberInput
from django.utils.safestring import mark_safe


class ReactWidgetPrice(NumberInput):
    template_name = None  # No se usará una plantilla, se renderiza directamente en `render`.

    def render(self, name, value, attrs=None, renderer=None):
        print(name)
        print(value)
        """
        Renderiza el contenedor del widget React y pasa los datos iniciales.
        """
        value = value or ""  # Asegúrate de no pasar `None` a React
        return mark_safe(f"""
        <div
                id="react-custom-widget-{name}"
                data-type="Price"
                data-field={name}
                data-initial={value}
            ></div>
        """)

class ReactWidgetPriceMenor(NumberInput):
    template_name = None  # No se usará una plantilla, se renderiza directamente en `render`.

    def render(self, name, value, attrs=None, renderer=None):
        print(name)
        print(value)
        """
        Renderiza el contenedor del widget React y pasa los datos iniciales.
        """
        value = value or ""  # Asegúrate de no pasar `None` a React
        return mark_safe(f"""
        <div
                id="react-custom-widget-{name}"
                data-type="PriceMenor"
                data-field={name}
                data-initial={value}
            ></div>
        """)

class ReactWidgetPriceInfante(NumberInput):
    template_name = None  # No se usará una plantilla, se renderiza directamente en `render`.

    def render(self, name, value, attrs=None, renderer=None):
        print(name)
        print(value)
        """
        Renderiza el contenedor del widget React y pasa los datos iniciales.
        """
        value = value or ""  # Asegúrate de no pasar `None` a React
        return mark_safe(f"""
        <div
                id="react-custom-widget-{name}"
                data-type="PriceInfante"
                data-field={name}
                data-initial={value}
            ></div>
        """)




class ReactWidgetMultiplier(NumberInput):
    template_name = None  # No se usará una plantilla, se renderiza directamente en `render`.

    def render(self, name, value, attrs=None, renderer=None):
        print(name)
        """
        Renderiza el contenedor del widget React y pasa los datos iniciales.
        """
        value = value or ""  # Asegúrate de no pasar `None` a React
        return mark_safe(f"""
        <div
                id="react-custom-widget-{name}"
                data-type="PriceMultiplier"
                data-field={name}
                data-initial={value}
            ></div>
        """)

class ReactWidgetRangeWrapper(NumberInput):
    template_name = None  # No se usará una plantilla, se renderiza directamente en `render`.
    input_type = "range"
    
    def render(self, name, value, attrs=None, renderer=None):
        print(name)
        """
        Renderiza el contenedor del widget React y pasa los datos iniciales.
        """
        value = value or ""  # Asegúrate de no pasar `None` a React
        return mark_safe(f"""
        <div
                id="react-custom-widget-{name}"
                data-type="WrapperComponentRange"
                data-field={name}
                data-initial={value}
            ></div>
        """)

class ReactWidgetPassenger(NumberInput):
    template_name = None  # No se usará una plantilla, se renderiza directamente en `render`.

    def render(self, name, value, attrs=None, renderer=None):
        print(name)
        print(value)
        """
        Renderiza el contenedor del widget React y pasa los datos iniciales.
        """
        value = value or ""  # Asegúrate de no pasar `None` a React
        return mark_safe(f"""
        <div
                id="react-custom-widget-{name}"
                data-type="Passenger"
                data-field={name}
                data-initial={value}
            ></div>
        """)

class ReactWidgetPassengerMenor(NumberInput):
    template_name = None  # No se usará una plantilla, se renderiza directamente en `render`.

    def render(self, name, value, attrs=None, renderer=None):
        print(name)
        print(value)
        """
        Renderiza el contenedor del widget React y pasa los datos iniciales.
        """
        value = value or ""  # Asegúrate de no pasar `None` a React
        return mark_safe(f"""
        <div
                id="react-custom-widget-{name}"
                data-type="PassengerMenor"
                data-field={name}
                data-initial={value}
            ></div>
        """)

class ReactWidgetPassengerInfante(NumberInput):
    template_name = None  # No se usará una plantilla, se renderiza directamente en `render`.

    def render(self, name, value, attrs=None, renderer=None):
        print(name)
        print(value)
        """
        Renderiza el contenedor del widget React y pasa los datos iniciales.
        """
        value = value or ""  # Asegúrate de no pasar `None` a React
        return mark_safe(f"""
        <div
                id="react-custom-widget-{name}"
                data-type="PassengerInfante"
                data-field={name}
                data-initial={value}
            ></div>
        """)



class ReactWidgetSubFieldPrice(NumberInput):
    template_name = None  # No se usará una plantilla, se renderiza directamente en `render`.

    def render(self, name, value, attrs=None, renderer=None):
        print(name)
        print(value)
        """
        Renderiza el contenedor del widget React y pasa los datos iniciales.
        """
        value = value or ""  # Asegúrate de no pasar `None` a React
        return mark_safe(f"""
        <div
                id="react-custom-widget-{name}"
                data-type="SubFieldPrice"
                data-field={name}
                data-initial={value}
                
            ></div>
        """)

class ReactWidgetSubFieldSubPrice(NumberInput):
    template_name = None  # No se usará una plantilla, se renderiza directamente en `render`.

    def render(self, name, value, attrs=None, renderer=None):
        print(name)
        print(value)
        """
        Renderiza el contenedor del widget React y pasa los datos iniciales.
        """
        value = value or ""  # Asegúrate de no pasar `None` a React
        return mark_safe(f"""
        <div
                id="react-custom-widget-{name}"
                data-type="SubFieldSubPrice"
                data-field={name}
                data-initial={value}
                
            ></div>
        """)

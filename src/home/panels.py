from wagtail.admin.panels import  Panel
from wagtail.admin.ui.components import Component
from django.utils.safestring import mark_safe
from django.utils.html import format_html
from django.forms import Media

class ReactPriceMultiplierComponent(Component):

    def render_html(self, parent_context):
        # Obtén el valor actual del campo

        # Renderiza el contenedor donde React se montará
        return format_html("""
            <div
                id="react-price-widget"
                data-name="ga"
                data-initial-value="100"
                style="height: 100px"
            ></div>
        """)

    class Media:
        js = ["js/components-library.umd.js"]  # Archivo generado por Vite
        css = ["js/library.css"]



class PriceSnippetPanel(Panel):
    def __init__(self, template="PriceComponent/price_snippet.html", **kwargs):
        super().__init__(**kwargs)
        self.template = template

    def clone_kwargs(self):
        kwargs = super().clone_kwargs()
        del kwargs["help_text"]
        kwargs.update(
            template=self.template,
        )
        return kwargs

    class BoundPanel(Panel.BoundPanel):
        def __init__(self, panel, instance, request, form, prefix):
            # print(form)
            # print(dir(form))
            print(dir(instance))
            # print(dir(panel))
            super().__init__(panel, instance, request, form, prefix)
            self.template_name = self.panel.template
            
        def get_context_data(self, parent_context):
            context = super().get_context_data(parent_context)
            # print([i.get_full_url() for i in self.instance.get_children().live().specific()[0].get_children().specific()])
            # firstPath = self.instance.get_children().live().specific()
            # context['chill'] =([{'link':getEditPage(i.get_url_parts()[1],i.id),'title':i.title} for i in firstPath[0].get_children().specific()])
            print(self.instance.unitaryPrice)
            panel = ReactPriceMultiplierComponent()
            media = Media()
            media += panel.media
            context['panel'] = panel
            context['media'] = media
            return context



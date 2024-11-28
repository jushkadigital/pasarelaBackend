
from django.forms.widgets import NumberInput
from wagtail.admin.panels import Media


class PriceMultWidget(NumberInput):
    template_name = "PriceComponent/price_snippet.html"
    def __init__(self, attrs=None):
        super().__init__(attrs=attrs)


    def build_attrs(self, *args, **kwargs):
        attrs = super().build_attrs(*args, **kwargs)
        return attrs

    @property
    def media(self):
        return Media(
                js = ["js/components-library.umd.js"],
                css = ["js/library.css"]
        )


# api.py
from wagtail.api.v2.views import BaseAPIViewSet, PagesAPIViewSet
from wagtail.api.v2.router import WagtailAPIRouter
from rest_framework.renderers import JSONRenderer
# from rest_framework.renderers import JSONRenderer
# from blog.models import Blog
# from paquete.models import Paquete
# from home.models import BlogPage, Contacto, DataGeneral, Informacion, Destino, Inicio, Nosotros, SalidasPage
# from wagtail.images.api.v2.views import ImagesAPIViewSet
from src.home.models import DataGeneral, PaqueteMexico
# from salidasGrupales.models import SalidasGrupales
# from tour.models import Tour
# from wagtail.api.v2.utils import (
#     BadRequestError,
#     page_models_from_string,
# )
# from wagtail.models import Page 


api_router = WagtailAPIRouter('wagtailapi')

class CustomSnippetDataGeneralApiViewSet(BaseAPIViewSet):
    body_fields = BaseAPIViewSet.body_fields + ['terminosyCondiciones','terminosyCondicionesEng']
    renderer_classes = [JSONRenderer]
    name = "dataGeneral"
    model = DataGeneral

api_router.register_endpoint('snippets/dataGeneral', CustomSnippetDataGeneralApiViewSet)

class CustomSnippetDataPaqueteMexicoApiViewSet(BaseAPIViewSet):
    body_fields = BaseAPIViewSet.body_fields + ['namePaquete',
                                                'unitaryPriceAdultAfter',
                                                'unitaryPriceMenorAfter',
                                                'unitaryPriceChildAfter',
                                                'unitaryPriceAdultIn',
                                                'unitaryPriceMenorIn',
                                                'unitaryPriceChildIn',
                                                'unitaryPriceAdultBefore',
                                                'unitaryPriceMenorBefore',
                                                'unitaryPriceChildBefore',
                                                'percentaje','fechas']
    renderer_classes = [JSONRenderer]
    name = "dataPaqueteMexico"
    model = PaqueteMexico

api_router.register_endpoint('snippets/dataPaquete', CustomSnippetDataPaqueteMexicoApiViewSet)

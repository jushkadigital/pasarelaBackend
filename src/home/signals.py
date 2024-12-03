from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Apis
import requests


@receiver(post_save, sender=Apis)
def ApisSignal(sender, instance, **kwargs):
    tokken = "lGNGGQSjuqmQnVvgfuS4jfGQ"
    projectId = "prj_EA0bQ8F4kakBwae6NfIUfJnVmlve"
    url = f"https://api.vercel.com/v9/projects/{projectId}"
    getUrl = lambda x: f"{url}/env/{x}"
    uniqueIdentifiers = {
        "ID_TIENDA": "Z9oUePy63enK5nwP",
        "PASSWORD": "yRAH52lQVnwLSsZq",
        "HMAC_SHA2": "zxYRihSRRcrYLBvj",
    }
    keyValuesEnvs = {
        "ID_TIENDA": instance.idTienda,
        "PASSWORD": instance.password,
        "HMAC_SHA2": instance.hmacSha256,
    }

    for a, b in uniqueIdentifiers.items():
        requests.patch(
            getUrl(b),
            json={
                "key": a,
                "target": ["preview", "production", "development"],
                "type": "plain",
                "value": keyValuesEnvs[a],
            },
            headers={"Authorization": f"Bearer {tokken}"},
        )
    print("porfin")
    response = requests.post(
            "https://api.vercel.com/v1/integrations/deploy/prj_EA0bQ8F4kakBwae6NfIUfJnVmlve/N7gMrLWClJ"
    )
    response.raise_for_status()
    print("finally")

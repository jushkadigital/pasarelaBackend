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
        "PAYPAL_CLIENT_ID": "D72qGgP3x2dDixlN",
        "PAYPAL_BASE_URL": "4Kv5xAA1BUAMJTC9",
        "PAYPAL_SECRET": "UWsvqiQu4rsjH5Hr",
        "NEXT_PUBLIC_PAYPAL_CLIENT_ID": "7OktWYZbiTmXNued"
    }
    keyValuesEnvs = {
        "ID_TIENDA": instance.idTienda,
        "PASSWORD": instance.password,
        "PAYPAL_CLIENT_ID": instance.paypalClientId,
        "PAYPAL_SECRET": instance.paypalSecret,
        "PAYPAL_BASE_URL": instance.paypalUrl,
        "NEXT_PUBLIC_PAYPAL_CLIENT_ID": instance.paypalClientId
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

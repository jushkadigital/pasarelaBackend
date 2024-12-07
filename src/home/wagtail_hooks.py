from django.utils.safestring import mark_safe

from wagtail import hooks

print("GAAAAAAA hh")

@hooks.register('insert_global_admin_js',order=1)
def global_admin_js():
    return mark_safe(
        """
           <script type="module" src="/static/js/zustand_initializer.js"></script>
            <script type="text/javascript" src="/static/js/components-library.umd.js"></script>
            <script type="text/javascript" src="/static/js/domloader.js"></script>
        """,
    )

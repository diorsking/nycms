from django.views.generic import TemplateView

from zinnia.views.archives import EntryIndex


class WidthEntryIndex(EntryIndex):
    template_name = 'zinnia/width_entry_list.html'


class Index(EntryIndex):
    template_name = 'zinnia/index.html'


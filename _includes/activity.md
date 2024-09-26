
<p style="text-align: left;">
{% for item in site.data.activity %}
<small>
  <i class="{{ item.icon }}"></i>
  {{ item.description }}
</small></br>
{% endfor %}
</p>

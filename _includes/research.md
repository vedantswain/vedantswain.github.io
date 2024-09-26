<!-- anchor hook for navbar -->
<span id="publications"></span>

### Selected Publications

For an up to date and complete list, visit my [Google Scholar profile]({{ site.google_scholar }})

{% assign grouped_papers = site.data.bibliography | group_by: "year" %}
{% for group in grouped_papers %}
<div class="papers">
  <h4>{{ group.name }}</h4>
  {% for paper in group.items %}
  <div class="paper-item">
    <span>{{ paper.title }}</span>
    {% if paper.award %}
      <i class="fa-solid fa-trophy" style="color: {% if paper.award == 'Best Paper' %}goldenrod{% else %}darkgoldenrod{% endif %};"></i>
    {% endif %}
    <br>
    {{ paper.author }} <br> 
    {{ paper.venue }} |
    <a href="{{ paper.external_link }}" target="_blank">Link</a>  
    {% if paper.internal_link %} | <a href="{{ paper.internal_link }}" target="_blank">PDF</a>{% endif %}
  </div>
  {% endfor %}
</div>
{% endfor %}

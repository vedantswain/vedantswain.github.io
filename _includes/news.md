<!-- anchor hook for navbar -->
<span id="news"></span>

### Recent News
<!-- pinned -->
> 🚨 I am starting a new research group at NYU to focus on *COmputing for Performance, Health and Empathetic Experiences* (COPHEE). If you're interested in working with us please checkout the website: [coffee@nyu](https://cophee-lab.com/)

<!-- actual news -->
<table>
{% assign news_items = site.data.news | slice: 0, 10 %}
{% for item in news_items %}
  <tr class="news-item">
    <td style="color:{{ item.color }};"><i class="{{ item.icon }}"></i></td>
    <td>[{{ item.date }}]</td>
    <td>{{ item.description }} 
    {% if item.link %}
    <small>
      <a href="{{ item.link }}"><i class="fa-solid fa-link"></i></a>
    </small>
    {% endif %}
    </td>
  </tr>
{% endfor %}
</table>
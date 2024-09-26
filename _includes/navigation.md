<nav>
  <h2><a href="{{ "/" | absolute_url }}">{{ site.name }}</a></h2>
  <div>
    {% for item in site.data.navigation %}
      <a href="{{ item.link }}">{{ item.name }}</a>
    {% endfor %}
  </div>
</nav>
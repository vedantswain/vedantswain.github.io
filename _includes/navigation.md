<nav>
  <h1><a href="{{ "/" | absolute_url }}">{{ site.name }}</a></h1>
  <button type="button" class="burger" aria-label="Menu">
    <i class="fa-solid fa-bars" style="font-size:1.1rem"></i>
  </button>  
  <div class="nav-links">
    {% for item in site.data.navigation %}
      <a href="{{ item.link }}">{{ item.name }}</a>
    {% endfor %}
  </div>
</nav>
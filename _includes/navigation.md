<nav>
  <h2><a href="{{ "/" | absolute_url }}">{{ site.name }}</a></h2>
  <a class="burger" >
    <i class="fa-solid fa-bars" style="font-size:1.1rem"></i>
  </a>  
  <div class="nav-links">
    {% for item in site.data.navigation %}
      <a href="{{ item.link }}">{{ item.name }}</a>
    {% endfor %}
  </div>
</nav>
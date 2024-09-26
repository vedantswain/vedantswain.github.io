<!-- anchor hook for navbar -->
<span id="people"></span>

### Students

My fellowship allows me to directly supervise, and even fund, student researchers on projects where I am the Principal Investigator.  If you are interested to work with me, drop me an email sharing your expertise and what interests you about my research.

<ul>
  {% for student in site.data.people.students %}
    <li>
      <a href="{{ student.link }}">{{ student.name }}</a>
      &mdash; {{ student.role }}
    </li>
  {% endfor %}
</ul>

### Collaborators
<ul>
  {% for collaborator in site.data.people.collaborators %}
    <li>
      <a href="{{ collaborator.link }}">{{ collaborator.name }}</a> ({{ collaborator.affiliation }})
    </li>
  {% endfor %}
</ul>
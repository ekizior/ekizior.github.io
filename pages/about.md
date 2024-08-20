---
layout: page
title: About
permalink: /about/
weight: 3
---

# **About Me**

Hi I am **{{ site.author.name }}** :wave:,<br>
I am currently a student at UC Berkeley pursuing a degree in Electrical Engineering & Computer Science. Whether it's through my work as a coding instructor, music tutor, or software developer, I am passionate about making an impact on people through education and technology.

<div class="row">
{% include about/timeline.html %}
</div>

<div class="row">
{%- assign project_type  = "local" -%}
{%- assign project_id    = project.name | slugify -%}
{%- assign project_img   = project.image -%}
{%- assign project_name  = project.name -%}
{%- assign project_desc  = project.description -%}
{%- assign project_tools = project.tools -%}

{%- if project.external_url -%}
    {%- assign project_url = project.external_url -%}
    {%- assign external    = true -%}
{%- else -%}
    {%- assign project_url = project.url | relative_url -%}
    {%- assign external    = false -%}
{%- endif -%}

{% include projects/project-card.html %}
</div>
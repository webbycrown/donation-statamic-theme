---
id: home
blueprint: pages
title: 'Home'
template: page
body_class: transperent
transparent_header: true
show_loader: true
page_builder:
  -
    id: home-hero-1
    type: home_hero_one
    heading: 'The Happiness is Giving it Away'
    button_label: 'Get help now'
    button_url: /help-me
    video_url: 'https://www.youtube.com/watch?v=kOISEM6L4xk'
  -
    id: about-intro-1
    type: about_intro
    heading: 'Et harum quidem rerum facilis est et expedita distinctio.'
    button_label: 'About us'
    button_url: /about-us
  -
    id: help-stories-1
    type: help_stories
    heading: 'Where do go for Your donation?'
    story_heading: 'Story of Rohan'
    donate_heading: 'We need your support'
    donate_text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
  -
    id: donation-timeline-1
    type: donation_timeline
    heading: 'Our Impact Over the Years'
    items:
      -
        year: '2021'
        amount: '$120,000'
        description: 'First year of campaigns — strong community response.'
      -
        year: '2022'
        amount: '$280,000'
        description: 'Expanded to three new regions.'
      -
        year: '2023'
        amount: '$510,000'
        description: 'Reached 5,000 families across 12 projects.'
  -
    id: portfolio-gallery-1
    type: portfolio_gallery
    show_instagram_icon: true
  -
    id: news-feature-1
    type: news_feature
    heading: 'Latest News'
    limit: 3
  -
    id: testimonials-slider-1
    type: testimonials_slider
    heading: 'People are saying'
  -
    id: stay-connect-1
    type: stay_connect
    heading: 'Stay connect with us'
---

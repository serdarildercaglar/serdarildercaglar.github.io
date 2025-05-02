# Gemfile
source "https://rubygems.org"

# GitHub Pages ile uyumluluk için 'github-pages' gem kullanın
gem "github-pages", group: :jekyll_plugins

# GitHub Pages ile uyumlu eklentiler
group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-seo-tag"
  gem "jekyll-watch"
  # Diğer GitHub Pages destekli eklentiler ihtiyaç duyarsanız eklenebilir
  # gem "jekyll-sitemap"
end

# Windows ve JRuby için özel destekler
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# kramdown HTML dönüştürücüsü için
gem "kramdown-parser-gfm"

# Lock jekyll-sass-converter to 2.x on Linux/macOS
gem "jekyll-sass-converter", "~> 2.0", :platforms => [:ruby]
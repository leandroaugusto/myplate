# ==============================================================================
# GENERAL CONFIGURATION
#
# View all options here:
# http://compass-style.org/help/tutorials/configuration-reference/
# ==============================================================================

require 'compass/import-once/activate'
# Require any additional compass plugins here.

# ==============================================================================
# COMPASS DIRECTORY CONFIGURATION
# ==============================================================================

# The root of all operations, must be set for Compass to work.
http_path             = "../"

# Directory containing the SASS source files
sass_dir              = "assets/stylesheets/_sass/"

# Directory where Compass dumps the generated CSS files
css_dir               = "assets/stylesheets/"

# Directory where font files use in font-face declarations are stored
fonts_dir             = "assets/fonts/"

# Directory where Compass stores the Grid image, and the sites images are stored
images_dir            = "assets/images/"

# Directory where the sites' JavaScript file are stored
javascripts_dir       = "assets/javascripts/"


# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed
output_style = :compressed

# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true
relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false
line_comments = false

# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass

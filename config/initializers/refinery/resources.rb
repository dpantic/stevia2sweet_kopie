Refinery::Resources.configure do |config|
  # Configures the maximum allowed upload size (in bytes) for a file upload
  # config.max_file_size = 52428800

  # Configure how many resources per page should be displayed when a dialog is presented that contains resources
  # config.pages_per_dialog = 12

  # Configure how many resources per page should be displayed in the list of resources in the admin area
  # config.pages_per_admin_index = 20

  # Configure S3 (you can also use ENV for this)
  # The s3_backend setting by default defers to the core setting for this but can be set just for resources.
   config.s3_backend = Refinery::Core.s3_backend
   config.s3_bucket_name = ENV['stevia2sweet']
   config.s3_access_key_id = ENV['AKIAJ3WRECOHI43T4FGQ']
   config.s3_secret_access_key = ENV['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']
   #config.s3_region = ENV['S3_REGION]

  # Configure Dragonfly
  # This is where in the middleware stack to insert the Dragonfly middleware
  # config.dragonfly_insert_before = "ActionDispatch::Callbacks"
  # config.dragonfly_secret = "0bc3825b84b33b972e797bc45f6a9c70634805d3973f466a"
  # config.dragonfly_url_format = "/system/resources/:job/:basename.:format"
  # config.datastore_root_path = "/Users/deki/web/stevia/steviashop/public/system/refinery/resources"

end

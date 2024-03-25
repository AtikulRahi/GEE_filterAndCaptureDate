var s2 = ee.ImageCollection("COPERNICUS/S2_SR_HARMONIZED") 
          .filterBounds(geometry)
          .filterDate("2023-01-01","2023-01-31")
          .filter(ee.Filter.lt("CLOUDY_PIXEL_PERCENTAGE",10))
print(s2)

var img = ee.Image(s2.first())
var captureDate = ee.Date(img.get('system:time_start'))
var formattedDate = captureDate.format('YYYY-MM-dd')

print('Capture Date:', formattedDate);
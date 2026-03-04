/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 *
 * For more information visit:
 * https://www.amcharts.com/
 *
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */
am4core.useTheme(am4themes_animated);

// Create chart
var chart = am4core.create("chartdiv", am4plugins_forceDirected.ForceDirectedTree);

// Create series
var series = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries());

//Set data
series.data = [{
  "name": "Search Engines", 
  "children": [{
    "name": "Google", 
    "sourceType": "Search Engines", 
    "children": [{
      "name": "PISC (People in Social Context)",
      "value": 5, 
      "link": [
        "Google", "Bing", "MS-COCO", "YFCC100M", "Visual Genome", "Flickr", "Twitter", "Instagram"]}, {"name": "Beauty 799", "value": 5, "link": ["Google", "faceresearch.org", "Shanghai Database", "XM2VTS", "Flickr"]}, {"name": "DeepFashion", "value": 5, "link": ["Google", "Mogujie", "Forever21"]}, {"name": "IARPA Janus Benchmark C (IJB-C)", "value": 5, "link": ["Google", "Yahoo! Images", "YouTube"]}, {"name": "10K US Faces", "value": 5, "link": ["Google"]}, {"name": "FaceScrub", "value": 5, "link": ["Google"]}, {"name": "VGG Face", "value": 5, "link": ["Google", "Bing"]}, {"name": "MS-COCO", "sourceType": "Prior Datasets", "children": [{"name": "SOBA (Shadow-OBject Association)", "value": 5, "link": ["MS-COCO", "ADE20K", "SBU Captioned Photo Dataset", "\"The Internet\""]}, {"name": "Visual Genome", "sourceType": "Prior Datasets", "children": [], "link": ["MS-COCO", "YFCC100M"], "paper": "Krishna, Ranjay, et al. \"Visual genome: Connecting language and vision using crowdsourced dense image annotations.\" arXiv preprint arXiv:1602.07332 (2016).", "year": "2016", "website": "https://visualgenome.org/"}, {"name": "EMOTIC (EMOTIons in Context)", "value": 5, "link": ["MS-COCO", "ADE20K"]}, {"name": "Gun Detection Dataset", "value": 5, "link": ["MS-COCO", "Video Anomaly Detection Dataset", "Salido et al. Dataset", "ImageNet", "Database-5", "IMFDb"]}], "link": ["Google", "Bing"], "paper": "Lin, Tsung-Yi, et al. \"Microsoft coco: Common objects in context.\" European conference on computer vision. Springer, Cham, 2014.", "year": "2014", "website": "https://cocodataset.org/#home"}, {"name": "INRIA Person", "value": 5, "link": ["Google", "Author's Personal Images", "Graz"]}, {"name": "Hipster Wars", "value": 5, "link": ["Google"]}, {"name": "LARGE AGE-GAP (LAG)", "value": 5, "link": ["Google", "YouTube"]}, {"name": "WIDER FACE", "value": 5, "link": ["Google", "Bing"]}, {"name": "Celebrities in Frontal-Profile (CFP)", "value": 5, "link": ["Google"]}, {"name": "Caltech-101 Object Categories Dataset", "value": 5, "link": ["Google"]}, {"name": "Nis Web-Collected Database", "value": 5, "link": ["Google", "Flickr"]}, {"name": "Tiny Images", "value": 5, "link": ["Google", "Picsearch", "Ask", "Cyrdral", "Webshots", "Altavista", "Flickr"]}, {"name": "CROSS-AGE CELEBRITY DATASET (CACD)", "value": 5, "link": ["Google"]}, {"name": "300 FACES IN-THE-WILD CHALLENGE (300-W)", "value": 5, "link": ["Google"]}, {"name": "FAMILIES IN THE WILD (FIW)", "value": 5, "link": ["Google", "Bing"]}]}, {"name": "Bing", "sourceType": "Search Engines", "children": [{"name": "MICROSOFT CELEB (MS-CELEB-1M)", "value": 5, "link": ["Bing", "\"The Internet\""]}, {"name": "Yoga-82", "value": 5, "link": ["Bing", "Unnamed Yoga Website"]}]}, {"name": "Unspecified Search Engines", "sourceType": "Search Engines", "children": [{"name": "KinFaceW", "value": 5, "link": ["Unspecified Search Engines"]}, {"name": "MSR-VTT", "value": 5, "link": ["Unspecified Search Engine"]}]}, {"name": "Picsearch", "sourceType": "Search Engines", "children": []}, {"name": "Ask", "sourceType": "Search Engines", "children": []}, {"name": "Baidu", "sourceType": "Search Engines", "children": [{"name": "MALF", "value": 5, "link": ["Baidu", "Flickr"]}]}, {"name": "Yahoo! Images", "sourceType": "Search Engines", "children": []}, {"name": "Cyrdral", "sourceType": "Search Engines", "children": []}, {"name": "Webshots", "sourceType": "Search Engines", "children": []}, {"name": "Altavista", "sourceType": "Search Engines", "children": []}]}, 
               
               {"name": "Video Sharing Sites",
                "children": [{"name": "YouTube", "sourceType": "Video Sharing Sites", "children": [{"name": "Celeb-DF", "value": 5, "link": ["YouTube"]}, {"name": "The Mobiface Dataset", "value": 5, "link": ["YouTube"]}, {"name": "HRT TRANSGENDER FACE DATABASE", "value": 5, "link": ["YouTube"]}, {"name": "CrossTask", "value": 5, "link": ["YouTube"]}, {"name": "EVVE (EVent VidEo dataset)", "value": 5, "link": ["YouTube"]}, {"name": "Sports-1M", "value": 5, "link": ["YouTube"]}, {"name": "YT-BB (YouTube-BoundingBoxes)", "sourceType": "Prior Datasets", "children": [{"name": "FVI", "value": 5, "link": ["YT-BB (YouTube-BoundingBoxes)", "YouTube-VOS"]}], "link": ["YouTube"], "paper": "Real, Esteban, et al. \"Youtube-boundingboxes: A large high-precision human-annotated data set for object detection in video.\" proceedings of the IEEE Conference on Computer Vision and Pattern Recognition. 2017.", "year": "2017", "website": ""}, {"name": "Kinetics-700", "value": 5, "link": ["YouTube"]}, {"name": "YouTube-VOS", "sourceType": "Prior Datasets", "children": [], "link": ["YouTube"], "paper": "Xu, Ning, et al. \"Youtube-vos: A large-scale video object segmentation benchmark.\" arXiv preprint arXiv:1809.03327 (2018).", "year": "2018", "website": ""}, {"name": "FaceForensics", "value": 5, "link": ["YouTube"]}, {"name": "WWW Crowd", "value": 5, "link": ["YouTube", "Pond5", "GettyImages"]}, {"name": "XD-Violence", "value": 5, "link": ["YouTube", "Movies"]}, {"name": "BAVL (Blind Audio-Visual Localization)", "value": 5, "link": ["YouTube"]}, {"name": "JHMDB (Joint-annotated Human Motion Data Base)", "value": 5, "link": ["YouTube", "Google Videos", "Movies", "Prelinger Archives", "\"The Internet\""]}, {"name": "Penn Action", "value": 5, "link": ["YouTube"]}, {"name": "Win-Fail Action Understanding", "value": 5, "link": ["YouTube"]}, {"name": "UCF101 (UCF101 Human Actions dataset)", "value": 5, "link": ["YouTube"]}, {"name": "HowTo100M", "value": 5, "link": ["YouTube"]}, {"name": "ActivityNet", "value": 5, "link": ["YouTube", "\"The Internet\""]}, {"name": "Planned Event Dataset", "value": 5, "link": ["YouTube", "Flickr", "Twitter"]}, {"name": "YouTube-100M", "value": 5, "link": ["YouTube"]}, {"name": "MPII Human Pose", "value": 5, "link": ["YouTube"]}]}, {"name": "TikTok", "sourceType": "Video Sharing Sites", "children": [{"name": "TikTok Dataset", "value": 5, "link": ["TikTok"]}]}, {"name": "Vimeo", "sourceType": "Video Sharing Sites", "children": [{"name": "Vimeo Creative Commons Collection (V3C)", "value": 5, "link": ["Vimeo"]}]}, {"name": "Google Videos", "sourceType": "Video Sharing Sites", "children": []}]}, 
               {"name": "Other", 
                "children": [{"name": "locateadoc.com", "sourceType": "Other", "children": [{"name": "IIITD PLASTIC SURGERY FACE DATABASE", "value": 5, "link": ["locateadoc.com", "surgery.org"]}]}, {"name": "rehabs.com", "sourceType": "Other", "children": [{"name": "Illicit Drug Abuse Face Database", "value": 5, "link": ["rehabs.com", "facesofmeth.us"]}]}, {"name": "facesofmeth.us", "sourceType": "Other", "children": []}, {"name": "surgery.org", "sourceType": "Other", "children": []}, {"name": "Movies", "sourceType": "Other", "children": [{"name": "Acted Facial Expressions In The Wild (AFEW)", "value": 5, "link": ["Movies"]}]}, {"name": "Mogujie", "sourceType": "Other", "children": []}, {"name": "Forever21", "sourceType": "Other", "children": []}, {"name": "Paintings", "sourceType": "Other", "children": [{"name": "Abstract Paintings / Artistic Photographs Datasets", "value": 5, "link": ["Paintings", "deviantart", "IAPSa"]}]}, {"name": "Author's Personal Images", "sourceType": "Other", "children": []}, {"name": "Unnamed Pornography Website(s)", "sourceType": "Other", "children": [{"name": "NPDI Pornography-800", "value": 5, "link": ["Unnamed Pornography Website(s)", "Unspecified Entirely"]}]}, {"name": "Crowdsourced Images", "sourceType": "Other", "children": [{"name": "APPA-REAL", "value": 5, "link": ["Crowdsourced Images", "AgeGuess"]}]}, {"name": "http://memebase.cheezburger.com/totallylookslike", "sourceType": "Other", "children": [{"name": "TLL", "value": 5, "link": ["http://memebase.cheezburger.com/totallylookslike"]}]}, {"name": "faceresearch.org", "sourceType": "Other", "children": []}, {"name": "Unnamed Yoga Website", "sourceType": "Other", "children": []}, {"name": "deviantart", "sourceType": "Other", "children": []}, {"name": "Prelinger Archives", "sourceType": "Other", "children": []}]}, 
               
               {"name": "Prior Datasets",
                "children": [{"name": "YFCC100M", "sourceType": "Prior Datasets", "children": [{"name": "MegaFace", "sourceType": "Prior Dataset", "children": [{"name": "DiveFace", "value": 5, "link": ["MegaFace"]}], "link": ["YFCC100M"], "paper": "Kemelmacher-Shlizerman, Ira, et al. \"The megaface benchmark: 1 million faces for recognition at scale.\" Proceedings of the IEEE conference on computer vision and pattern recognition. 2016.", "year": "2016", "website": "http://megaface.cs.washington.edu/"}]}, {"name": "LFW", "sourceType": "Prior Datasets", "children": [{"name": "LABELED FACES IN THE WILD-A (LFW-A)", "value": 5, "link": ["LFW"]}, {"name": "LFWgender", "value": 5, "link": ["LFW"]}]}, {"name": "ADE20K", "sourceType": "Prior Datasets", "children": []}, {"name": "IAPSa", "sourceType": "Prior Datasets", "children": []}, {"name": "SBU Captioned Photo Dataset", "sourceType": "Prior Datasets", "children": []}, {"name": "CelebFaces", "sourceType": "Prior Datasets", "children": [{"name": "CelebA", "value": 5, "link": ["CelebFaces"]}]}, {"name": "Pond5", "sourceType": "Prior Datasets", "children": []}, {"name": "Video Anomaly Detection Dataset", "sourceType": "Prior Datasets", "children": []}, {"name": "Names and Faces in the News", "sourceType": "Prior Datasets", "children": []}, {"name": "Shanghai Database", "sourceType": "Prior Datasets", "children": []}, {"name": "PubFig", "sourceType": "Prior Datasets", "children": [{"name": "FAD (Face Attributes Dataset)", "value": 5, "link": ["PubFig"]}]}, {"name": "Salido et al. Dataset", "sourceType": "Prior Datasets", "children": []}, {"name": "Corel", "sourceType": "Prior Datasets", "children": [{"name": "Berkeley Segmentation Data Set (BSDS300)", "value": 5, "link": ["Corel"]}]}, {"name": "Paper Doll", "sourceType": "Prior Datasets", "children": [{"name": "ModaNet", "value": 5, "link": ["Paper Doll"]}]}, {"name": "Graz", "sourceType": "Prior Datasets", "children": []}, {"name": "XM2VTS", "sourceType": "Prior Datasets", "children": []}, {"name": "LVIS", "sourceType": "Prior Datasets", "children": [{"name": "CAMO++", "value": 5, "link": ["LVIS", "\"The Internet\""]}]}, {"name": "PASCAL Visual Object Classes (VOC)", "sourceType": "Prior Datasets", "children": [{"name": "Stanford region labeling dataset", "value": 5, "link": ["PASCAL Visual Object Classes (VOC)", "Geometric Context (GC)", "MSRC"]}]}, {"name": "University of Notre Dame, Collection B", "sourceType": "Prior Datasets", "children": [{"name": "ND-IIITD Retouched Face Database", "value": 5, "link": ["University of Notre Dame, Collection B", "\"The Internet\""]}]}, {"name": "Geometric Context (GC)", "sourceType": "Prior Datasets", "children": []}, {"name": "AVA-Plus", "sourceType": "Prior Datasets", "children": [{"name": "DPC-Captions", "value": 5, "link": ["AVA-Plus"]}]}, {"name": "MSRC", "sourceType": "Prior Datasets", "children": []}, {"name": "MSRA", "sourceType": "Prior Datasets", "children": [{"name": "MSRA10K", "value": 5, "link": ["MSRA"]}]}, {"name": "ImageNet", "sourceType": "Prior Datasets", "children": []}, {"name": "Database-5", "sourceType": "Prior Datasets", "children": []}]}, 
               
        {"name": "Online Photo Albums",
                "children": [{"name": "Flickr", "sourceType": "Online Photo Albums", "children": [{"name": "HICO (Humans Interacting with Common Objects)", "value": 5, "link": ["Flickr"]}, {"name": "REAL-WORLD AFFECTIVE FACES DATABASE (RAF-DB)", "value": 5, "link": ["Flickr"]}, {"name": "Flickr30k", "value": 5, "link": ["Flickr"]}, {"name": "Humans In 3D (H3D)", "value": 5, "link": ["Flickr"]}, {"name": "Open Images V4", "value": 5, "link": ["Flickr"]}, {"name": "Adience", "value": 5, "link": ["Flickr"]}, {"name": "HELEN DATABASE", "value": 5, "link": ["Flickr"]}, {"name": "Social Event Dataset (SED)", "value": 5, "link": ["Flickr"]}, {"name": "People in Photo Albums (PIPA)", "value": 5, "link": ["Flickr"]}, {"name": "TRI-SUBJECT KINSHIP FACE DATABASE (TSKINFACE)", "value": 5, "link": ["Flickr"]}, {"name": "Leeds Sports Pose", "value": 5, "link": ["Flickr"]}, {"name": "OUI-Audience", "value": 5, "link": ["Flickr"]}, {"name": "Flickr1024", "value": 5, "link": ["Flickr"]}]}]}, 
        
        {"name": "Real World Public Spaces", 
         fixed: true,
         "children": [{"name": "College Campus", "sourceType": "Real World Public Spaces", "children": [{"name": "Market-1501", "value": 5, "link": ["College Campus"]}, {"name": "VIPeR", "value": 5, "link": ["College Campus"]}, {"name": "DukeMTMC", "value": 5, "link": ["College Campus"]}]}, {"name": "Unspecified Real World Space", "sourceType": "Real World Public Spaces", "children": [{"name": "CVC-14", "value": 5, "link": ["Unspecified Real World Space"]}, {"name": "MOT16", "value": 5, "link": ["Unspecified Real World Space"]}, {"name": "PTZ Tracking", "value": 5, "link": ["Unspecified Real World Space"]}]}, {"name": "UAVs", "sourceType": "Real World Public Spaces", "children": [{"name": "UAVDT", "value": 5, "link": ["UAVs"]}]}, {"name": "CCTV Camera Footage", "sourceType": "Real World Public Spaces", "children": [{"name": "i-LIDS", "value": 5, "link": ["CCTV Camera Footage"]}]}, {"name": "Train Station", "sourceType": "Real World Public Spaces", "children": [{"name": "Grand Central Station Dataset", "value": 5, "link": ["Train Station"]}]}]}, 
               
        {"name": "Social Media", 
                fixed: true,
                "children": [{"name": "Twitter", "sourceType": "Social Media", "children": [{"name": "Twitter100k", "value": 5, "link": ["Twitter"]}]}, {"name": "chictopia", "sourceType": "Social Media", "children": [{"name": "Fashion144K", "value": 5, "link": ["chictopia"]}]}, {"name": "Tumblr", "sourceType": "Social Media", "children": [{"name": "TGIF", "value": 5, "link": ["Tumblr"]}]}, {"name": "Instagram", "sourceType": "Social Media", "children": []}, {"name": "Facebook", "sourceType": "Social Media", "children": [{"name": "FACEBOOK100", "value": 5, "link": ["Facebook"]}]}]}, 
        
        {"name": "Unknown", 
         fixed: true,
         "children": [{"name": "Unspecified Entirely", "sourceType": "Unknown", "children": [{"name": "Pilot Parliaments Benchmark (PPB)", "value": 5, "link": ["Unspecified Entirely"]}, {"name": "FDST (Fudan-ShanghaiTech)", "value": 5, "link": ["Unspecified Entirely"]}, {"name": "Yahoo's Safe for Work (SFW) or Not Safe for Work (NSFW)", "value": 5, "link": ["Unspecified Entirely"]}]}, {"name": "\"The Internet\"", "sourceType": "Unknown", "children": [{"name": "WhoIsIt (WIT) Face Database", "value": 5, "link": ["\"The Internet\""]}, {"name": "IdentifyMe", "value": 5, "link": ["\"The Internet\""]}, {"name": "SCUT-FBP-A BENCHMARK DATASET FOR FACIAL BEAUTY PERCEPTION", "value": 5, "link": ["\"The Internet\""]}, {"name": "SUN", "value": 5, "link": ["\"The Internet\""]}, {"name": "IG-1B-Targeted", "value": 5, "link": ["\"The Internet\""]}, {"name": "Family101", "value": 5, "link": ["\"The Internet\""]}, {"name": "RMFD (Real-World Masked Face Dataset)", "value": 5, "link": ["\"The Internet\""]}, {"name": "Compaq dataset", "value": 5, "link": ["\"The Internet\""]}, {"name": "Lopes et al. (Image)", "value": 5, "link": ["\"The Internet\""]}]}]}, 
               
               {"name": "Informational Websites",
                "children": [{"name": "IMDb", "sourceType": "Informational Websites", "children": [{"name": "CASIA-WEBFACE", "value": 5, "link": ["IMDb"]}, {"name": "IMDB-WIKI", "value": 5, "link": ["IMDb", "Wikipedia"]}]}, {"name": "IMFDb", "sourceType": "Informational Websites", "children": []}, {"name": "Wikipedia", "sourceType": "Informational Websites", "children": []}]}, 
               
               {"name": "Public Records",
                "children": [{"name": "Mugshots", "sourceType": "Public Records", "children": [{"name": "NIST MUGSHOT IDENTIFICATION DATABASE (MID)", "value": 5, "link": ["Mugshots"]}, {"name": "MORPH", "value": 5, "link": ["Mugshots"]}]}, {"name": "Yahoo! News", "sourceType": "Public Records", "children": [{"name": "UMass FDDB", "value": 5, "link": ["Yahoo! News"]}]}]}, 
               
               {"name": "User Rating Websites",
                "children": [{"name": "Hot-or-Not", "sourceType": "User Rating Websites", "children": [{"name": "Hot-Or-Not database", "value": 5, "link": ["Hot-or-Not"]}, {"name": "Gray dataset", "value": 5, "link": ["Hot-or-Not"]}]}, {"name": "AgeGuess", "sourceType": "User Rating Websites", "children": []}]}, 
               
               {"name": "Stock Image Websites ",
                "children": [{"name": "Unsplash", "sourceType": "Stock Image Websites ", "children": [{"name": "Unsplash2K", "value": 5, "link": ["Unsplash"]}]}, {"name": "GettyImages", "sourceType": "Stock Image Websites ", "children": []}]}]
 

// Set up data fields
series.dataFields.value = "value";
series.dataFields.name = "name";
series.dataFields.children = "children";
series.dataFields.id = "name";
series.dataFields.linkWith = "link";
series.nodes.template.expandAll = false;

// Add labels
series.nodes.template.label.text = "{name}";
series.nodes.template.label.wrap = true;
chart.tooltip.label.maxWidth = 150;
chart.tooltip.label.wrap = true;
series.tooltip.label.interactionsEnabled = true;
series.tooltip.keepTargetHover = true;
series.nodes.template.tooltipText = "{name}";
series.fontSize = 9;
series.minRadius = 28;
series.maxRadius = 30;
series.centerStrength = 3;
series.maxLevels = 5;

// Links
series.links.template.strokeWidth = 1.5;
series.links.template.distance = 3;
series.links.template.strength = 0.8;

// Chart Interaction
chart.legend = new am4charts.Legend();

// Aesthetic
series.nodes.template.adapter.add("fill", function(fill, target) {
  return fill.lighten(target.dataItem.level * 0.10);
});

chart.legend = new am4charts.Legend();


// // Legend container
// var legendContainer = am4core.create("legenddiv", am4core.Container);
// legendContainer.width = am4core.percent(100);
// legendContainer.height = am4core.percent(100);
// chart.legend.parent = legendContainer;

// chart.events.on("datavalidated", resizeLegend);
// chart.events.on("maxsizechanged", resizeLegend);

// chart.legend.events.on("datavalidated", resizeLegend);
// chart.legend.events.on("maxsizechanged", resizeLegend);

// function resizeLegend(ev) {
//   document.getElementById("legenddiv").style.height = chart.legend.contentHeight + "px";
// }

// chart.exporting.menu = new am4core.ExportMenu();
// chart.exporting.extraSprites.push({
//   "sprite": legendContainer,
//   "position": "top",
//   "marginTop": 20
// });


chart.zoomable = true;
chart.responsive.enabled = true;
series.nodes.template.togglable = true;
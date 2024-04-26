javascript: (function () {
    var re_year = /\/(\d{4})\//;
    var yyyy = re_year.exec(document.location) || {};
    var re_lang = /\/(eng|fra)\//;
    var lang = re_lang.exec(document.location) || {};
    if (lang[1] === "fra") {
        document.location = document.location.replace("fra/recensements", "eng/census");
    }
    var m = {};
    m["1851/eng"] = {
        "year": 1851,
        "fields": ["Province", "District Name", "District Number", "Sub-District Name", "Sub-District Number", "Page Number", "Microfilm", "Reference", "Item Number"],
    };
    m["1861/eng"] = {
        "year": 1861,
        "fields": ["Province", "District Name", "Sub-District Name", "Page Number", "Line Number", "Microfilm", "Item Number"],
    };
    m["1871/eng"] = {
        "year": 1871,
        "fields": ["Province", "District Name", "District Number", "Sub-District Name", "Sub-District Number", "Page Number", "Line Number", "Microfilm", "Item Number"],
    };
    m["1881/eng"] = {
        "year": 1881,
        "fields": ["Province", "District Name", "District Number", "Sub-District Name", "Sub-District Number", "Division Number", "Family Number", "Page Number", "Microfilm", "Reference", "Item Number"],
    };
    m["1891/eng"] = {
        "year": 1891,
        "fields": ["Province", "District Name", "District Number", "Sub-District Name", "Sub-District Number", "Family Number", "Page Number", "Microfilm", "Reference", "Item Number"],
    };
    m["1901/eng"] = {
        "year": 1901,
        "fields": ["Province", "District Name", "District Number", "Sub-District Name", "Sub-District Number", "Division Number", "Family Number", "Page Number", "Microfilm", "Reference", "Item Number"],
    };
    m["1911/eng"] = {
        "year": 1911,
        "fields": ["Province", "District Name", "District Number", "Sub-District Name", "Sub-District Number", "Family Number", "Page Number", "Microfilm", "Reference", "Item Number"],
    };
    m["1921/eng"] = {
        "year": 1921,
        "fields": ["Province", "District Name", "District Number", "Sub-District Name", "Sub-District Number", "Family Number", "Page Number", "Line Number", "Reference", "Item Number"],
    };
    m["1926/eng"] = {
        "year": 1926,
        "fields": ["Province", "District Name", "District Number", "Sub-District Description", "Sub-District Number", "Family Number", "Page Number", "Line Number", "Reference", "Item Number"],
    };
    var map = {};
    var lines = document.querySelectorAll(".col-md-6 > p");
    for (var i = 0; i < lines.length; i++) {
        if (lines[i].innerText.length > 0) {
            var fields = lines[i].innerText.split(':');
            map[fields[0].trim()] = fields[1].trim();
        }
    };
    var res = "Census of Canada, " + yyyy[1];
    var fields = m[yyyy[1] + "/" + lang[1]].fields;
    for (var i = 0; i < fields.length; i++) {
        res += ", " + fields[i] + ": " + (map[fields[i]] || "");
    }
    res += " [" + document.location + " link]";
    console.log(res);
    prompt("", res);
})()

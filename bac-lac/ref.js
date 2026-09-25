javascript: (function () {
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
    m["1931"] = {
        "year": 1931,
        "fields": ["Province", "District name", "District number", "Sub-district name", "Sub-district number", "Family number", "Page number", "Line number", "Item ID number", "Image number"],
    };
    var map = {};
    var lines = document.querySelectorAll(".CFCS-table-row-flex");
    for (var i = 0; i < lines.length; i++) {
        if (lines[i].innerText.length > 0) {
            var fields = lines[i].innerText.split(/[:?]/);
            map[fields[0].trim()] = fields[1].trim();
        }
    };
    var re_year = /\/(\d{4})\//;
    var yyyy = re_year.exec(map['Census year']) || '1931';
    var res = "Census of Canada, " + yyyy;
    var fields = m[yyyy].fields;
    for (var i = 0; i < fields.length; i++) {
        res += ", " + fields[i] + ": " + (map[fields[i]] || "");
    }
    res += " [" + document.location + " link]";
    console.log(res);
    prompt("", res);
})()

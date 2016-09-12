// adds Kilo, Mega, Giga, Tera suffixes
  function format_number(n) {
    if (n < 1000) {
      return n + "";
    }
    if (n < 1000000) {
      return ((n / 1000) >> 0) + (n / 1000 < 10? "." + ((n % 1000 / 100) >> 0) : "") + " K";
    }
    if (n < 1000000000) {
      return ((n / 1000000) >> 0) + (n / 1000000 < 10? "." + (((n / 1000) % 1000 / 100) >> 0) : "") + " M";
    }
    if (n < 1000000000000) {
      return ((n / 1000000000) >> 0) + (n / 1000000000 < 10? "." + (((n / 1000000) % 1000 / 100) >> 0) : "") + " G";
    }
    return ((n / 1000000000000) >> 0) + (n / 1000000000000 < 10? "." + (((n / 1000000000) % 1000 / 100) >> 0) : "") + " T";
  }

  // formats ratio as percent value
  function format_pct(num, den) {
    var ratio = num / den;
    return Math.round(ratio * 100) + "%";
  }

  // returns <td> from #lang-info table related to the specified id
  function get_lang_td(id) {
    return document.querySelector("#lang-" + id + " > td:last-of-type");
  }

  var language_index = ["ABAP", "AGS Script", "AMPL", "ANTLR", "API Blueprint", "APL", "ASP", "ATS", "ActionScript", "Ada", "Agda", "Alloy", "ApacheConf", "Apex", "Apollo Guidance Computer", "AppleScript", "Arc", "Arduino", "AsciiDoc", "AspectJ", "Assembly", "Augeas", "AutoHotkey", "AutoIt", "Awk", "Batchfile", "Befunge", "Bison", "BitBake", "Blade", "BlitzBasic", "BlitzMax", "Bluespec", "Boo", "Brainfuck", "Brightscript", "Bro", "C", "C#", "C++", "C-ObjDump", "C2hs Haskell", "CLIPS", "CMake", "COBOL", "COLLADA", "CSS", "CSV", "Cap'n Proto", "CartoCSS", "Ceylon", "Chapel", "Charity", "ChucK", "Cirru", "Clarion", "Clean", "Click", "Clojure", "CoffeeScript", "ColdFusion", "ColdFusion CFC", "Common Lisp", "Component Pascal", "Cool", "Coq", "Creole", "Crystal", "Csound", "Csound Document", "Csound Score", "Cucumber", "Cuda", "Cycript", "Cython", "D", "DIGITAL Command Language", "DM", "DNS Zone", "DTrace", "Darcs Patch", "Dart", "Diff", "Dockerfile", "Dogescript", "Dylan", "ECL", "ECLiPSe", "EJS", "EQ", "Eagle", "Ecere Projects", "Eiffel", "Elixir", "Elm", "Emacs Lisp", "EmberScript", "Erlang", "F#", "FLUX", "FORTRAN", "Factor", "Fancy", "Fantom", "Filterscript", "Forth", "FreeMarker", "Frege", "G-code", "GAMS", "GAP", "GAS", "GCC Machine Description", "GLSL", "Genshi", "Gentoo Ebuild", "Gentoo Eclass", "Gettext Catalog", "Glyph", "Gnuplot", "Go", "Golo", "Gosu", "Grace", "Gradle", "Grammatical Framework", "GraphQL", "Graphviz (DOT)", "Groff", "Groovy", "Groovy Server Pages", "HCL", "HLSL", "HTML", "HTML+Django", "HTML+ECR", "HTML+EEX", "HTML+ERB", "HTML+PHP", "HTTP", "Hack", "Haml", "Handlebars", "Harbour", "Haskell", "Haxe", "Hy", "HyPhy", "IDL", "IGOR Pro", "INI", "Idris", "Inform 7", "Inno Setup", "Io", "Ioke", "Isabelle", "J", "JFlex", "JSON", "JSON5", "JSONLD", "JSONiq", "JSX", "Jade", "Jasmin", "Java", "Java Server Pages", "JavaScript", "Julia", "Jupyter Notebook", "KRL", "KiCad", "Kit", "Kotlin", "LFE", "LLVM", "LOLCODE", "LSL", "LabVIEW", "Lasso", "Latte", "Lean", "Less", "Lex", "LilyPond", "Limbo", "Linker Script", "Linux Kernel Module", "Liquid", "Literate Agda", "Literate CoffeeScript", "Literate Haskell", "LiveScript", "Logos", "Logtalk", "LookML", "LoomScript", "Lua", "M", "M4", "MAXScript", "MTML", "MUF", "Makefile", "Mako", "Markdown", "Mask", "Mathematica", "Matlab", "Max", "MediaWiki", "Mercury", "Metal", "Mirah", "Modelica", "Modula-2", "Module Management System", "Monkey", "Moocode", "MoonScript", "Myghty", "NCL", "NSIS", "Nemerle", "NetLinx", "NetLogo", "NewLisp", "Nginx", "Nimrod", "Ninja", "Nit", "Nix", "Nu", "NumPy", "OCaml", "ObjDump", "Objective-C", "Objective-C++", "Objective-J", "Omgrofl", "Opa", "Opal", "OpenCL", "OpenEdge ABL", "OpenSCAD", "Org", "Ox", "Oxygene", "Oz", "PAWN", "PHP", "PLSQL", "PLpgSQL", "POV-Ray SDL", "Pan", "Papyrus", "Parrot", "Parrot Assembly", "Parrot Internal Representation", "Pascal", "Perl", "Perl6", "Pickle", "PicoLisp", "PigLatin", "Pike", "Pod", "PogoScript", "Pony", "PostScript", "PowerShell", "Processing", "Prolog", "Propeller Spin", "Protocol Buffer", "Public Key", "Puppet", "Pure Data", "PureBasic", "PureScript", "Python", "Python traceback", "QML", "QMake", "R", "RAML", "RDoc", "REALbasic", "RHTML", "RMarkdown", "Racket", "Ragel in Ruby Host", "Raw token data", "Rebol", "Red", "Redcode", "Ren'Py", "RenderScript", "RobotFramework", "Rouge", "Ruby", "Rust", "SAS", "SCSS", "SMT", "SPARQL", "SQF", "SQL", "SQLPL", "SRecode Template", "STON", "SVG", "Sage", "Sass", "Scala", "Scaml", "Scheme", "Scilab", "Self", "Shell", "ShellSession", "Shen", "Slash", "Slim", "Smali", "Smalltalk", "Smarty", "SourcePawn", "Squirrel", "Stan", "Standard ML", "Stata", "Stylus", "SuperCollider", "Swift", "SystemVerilog", "TLA", "TOML", "TXL", "Tcl", "Tcsh", "TeX", "Tea", "Terra", "Text", "Textile", "Thrift", "Turing", "Turtle", "Twig", "TypeScript", "Unified Parallel C", "Unity3D Asset", "Uno", "UnrealScript", "UrWeb", "VCL", "VHDL", "Vala", "Verilog", "VimL", "Visual Basic", "Volt", "Vue", "Wavefront Material", "Wavefront Object", "Web Ontology Language", "WebIDL", "World of Warcraft Addon Data", "X10", "XC", "XML", "XPages", "XProc", "XQuery", "XS", "XSLT", "Xojo", "Xtend", "YAML", "YANG", "Yacc", "Zephir", "Zimpl", "desktop", "eC", "edn", "fish", "mupad", "nesC", "ooc", "reStructuredText", "wisp", "xBase"];
  var language_data = {};

  d3.json("tabs_spaces.json", function(json) {
    language_data = json;
    show_stats("Text");
  });

  var language_info = document.getElementById("lang-info");

  function show_stats(language) {
    language_info.style.display = "block";
    document.getElementById("lang-title").innerHTML = language;
    var data = language_data[language];
    var norm = data["spaces"] + data["tabs"] + data["mixed"];
    get_lang_td("files").innerHTML = format_number(data.files);
    get_lang_td("loc").innerHTML = format_number(data.lines);
    get_lang_td("bytes").innerHTML = format_number(data.bytes) + "B";
    get_lang_td("spaces").innerHTML = format_number(data.spaces) + " (" + format_pct(data.spaces, norm) + ")";
    get_lang_td("tabs").innerHTML = format_number(data.tabs) + " (" + format_pct(data.tabs, norm) + ")";
    get_lang_td("mixed").innerHTML = format_number(data.mixed) + " (" + format_pct(data.mixed, norm) + ")";
  }

  d3.xml("tabs_spaces.svg").mimeType("image/svg+xml").get(function(error, xml) {
    if (error) throw error;
    document.body.appendChild(xml.documentElement);
    var svg = d3.select("svg").call(d3.zoom().on("zoom", function () {
      svg.attr("transform", d3.event.transform)
    })).select("g");
    d3.selectAll("#axes_1 > path").on("mouseenter", function() {
      var language = language_index[((this.id.substring(1) - 2) / 3) >> 0];
      show_stats(language);
    });
  });

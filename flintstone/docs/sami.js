(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '    <ul>                <li data-name="namespace:Flintstone" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Flintstone.html">Flintstone</a>                    </div>                    <div class="bd">                            <ul>                <li data-name="namespace:Flintstone_Formatter" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Flintstone/Formatter.html">Formatter</a>                    </div>                    <div class="bd">                            <ul>                <li data-name="class:Flintstone_Formatter_FormatterInterface" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Flintstone/Formatter/FormatterInterface.html">FormatterInterface</a>                    </div>                </li>                            <li data-name="class:Flintstone_Formatter_JsonFormatter" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Flintstone/Formatter/JsonFormatter.html">JsonFormatter</a>                    </div>                </li>                            <li data-name="class:Flintstone_Formatter_SerializeFormatter" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Flintstone/Formatter/SerializeFormatter.html">SerializeFormatter</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:Flintstone_Flintstone" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Flintstone/Flintstone.html">Flintstone</a>                    </div>                </li>                            <li data-name="class:Flintstone_FlintstoneDB" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Flintstone/FlintstoneDB.html">FlintstoneDB</a>                    </div>                </li>                            <li data-name="class:Flintstone_FlintstoneException" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Flintstone/FlintstoneException.html">FlintstoneException</a>                    </div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    {"type": "Namespace", "link": "Flintstone.html", "name": "Flintstone", "doc": "Namespace Flintstone"},{"type": "Namespace", "link": "Flintstone/Formatter.html", "name": "Flintstone\\Formatter", "doc": "Namespace Flintstone\\Formatter"},
            {"type": "Interface", "fromName": "Flintstone\\Formatter", "fromLink": "Flintstone/Formatter.html", "link": "Flintstone/Formatter/FormatterInterface.html", "name": "Flintstone\\Formatter\\FormatterInterface", "doc": "&quot;Interface for formatters&quot;"},
                                                        {"type": "Method", "fromName": "Flintstone\\Formatter\\FormatterInterface", "fromLink": "Flintstone/Formatter/FormatterInterface.html", "link": "Flintstone/Formatter/FormatterInterface.html#method_encode", "name": "Flintstone\\Formatter\\FormatterInterface::encode", "doc": "&quot;Encode data into a string&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\Formatter\\FormatterInterface", "fromLink": "Flintstone/Formatter/FormatterInterface.html", "link": "Flintstone/Formatter/FormatterInterface.html#method_decode", "name": "Flintstone\\Formatter\\FormatterInterface::decode", "doc": "&quot;Decode a string into data&quot;"},
            
            
            {"type": "Class", "fromName": "Flintstone", "fromLink": "Flintstone.html", "link": "Flintstone/Flintstone.html", "name": "Flintstone\\Flintstone", "doc": "&quot;The Flintstone database loader&quot;"},
                                                        {"type": "Method", "fromName": "Flintstone\\Flintstone", "fromLink": "Flintstone/Flintstone.html", "link": "Flintstone/Flintstone.html#method_load", "name": "Flintstone\\Flintstone::load", "doc": "&quot;Load a database&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\Flintstone", "fromLink": "Flintstone/Flintstone.html", "link": "Flintstone/Flintstone.html#method_unload", "name": "Flintstone\\Flintstone::unload", "doc": "&quot;Unload a database&quot;"},
            
            {"type": "Class", "fromName": "Flintstone", "fromLink": "Flintstone.html", "link": "Flintstone/FlintstoneDB.html", "name": "Flintstone\\FlintstoneDB", "doc": "&quot;The Flintstone database specific class&quot;"},
                                                        {"type": "Method", "fromName": "Flintstone\\FlintstoneDB", "fromLink": "Flintstone/FlintstoneDB.html", "link": "Flintstone/FlintstoneDB.html#method___construct", "name": "Flintstone\\FlintstoneDB::__construct", "doc": "&quot;Flintstone constructor&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\FlintstoneDB", "fromLink": "Flintstone/FlintstoneDB.html", "link": "Flintstone/FlintstoneDB.html#method_get", "name": "Flintstone\\FlintstoneDB::get", "doc": "&quot;Get a key from the database&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\FlintstoneDB", "fromLink": "Flintstone/FlintstoneDB.html", "link": "Flintstone/FlintstoneDB.html#method_set", "name": "Flintstone\\FlintstoneDB::set", "doc": "&quot;Set a key to store in the database&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\FlintstoneDB", "fromLink": "Flintstone/FlintstoneDB.html", "link": "Flintstone/FlintstoneDB.html#method_replace", "name": "Flintstone\\FlintstoneDB::replace", "doc": "&quot;Replace a key in the database&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\FlintstoneDB", "fromLink": "Flintstone/FlintstoneDB.html", "link": "Flintstone/FlintstoneDB.html#method_delete", "name": "Flintstone\\FlintstoneDB::delete", "doc": "&quot;Delete a key from the database&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\FlintstoneDB", "fromLink": "Flintstone/FlintstoneDB.html", "link": "Flintstone/FlintstoneDB.html#method_flush", "name": "Flintstone\\FlintstoneDB::flush", "doc": "&quot;Flush the database&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\FlintstoneDB", "fromLink": "Flintstone/FlintstoneDB.html", "link": "Flintstone/FlintstoneDB.html#method_getKeys", "name": "Flintstone\\FlintstoneDB::getKeys", "doc": "&quot;Get all keys from the database&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\FlintstoneDB", "fromLink": "Flintstone/FlintstoneDB.html", "link": "Flintstone/FlintstoneDB.html#method_getAll", "name": "Flintstone\\FlintstoneDB::getAll", "doc": "&quot;Get all data from the database&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\FlintstoneDB", "fromLink": "Flintstone/FlintstoneDB.html", "link": "Flintstone/FlintstoneDB.html#method_getFile", "name": "Flintstone\\FlintstoneDB::getFile", "doc": "&quot;Get the database file&quot;"},
            
            {"type": "Class", "fromName": "Flintstone", "fromLink": "Flintstone.html", "link": "Flintstone/FlintstoneException.html", "name": "Flintstone\\FlintstoneException", "doc": "&quot;Flintstone exception, just extends the main PHP exception class&quot;"},
                    
            {"type": "Class", "fromName": "Flintstone\\Formatter", "fromLink": "Flintstone/Formatter.html", "link": "Flintstone/Formatter/FormatterInterface.html", "name": "Flintstone\\Formatter\\FormatterInterface", "doc": "&quot;Interface for formatters&quot;"},
                                                        {"type": "Method", "fromName": "Flintstone\\Formatter\\FormatterInterface", "fromLink": "Flintstone/Formatter/FormatterInterface.html", "link": "Flintstone/Formatter/FormatterInterface.html#method_encode", "name": "Flintstone\\Formatter\\FormatterInterface::encode", "doc": "&quot;Encode data into a string&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\Formatter\\FormatterInterface", "fromLink": "Flintstone/Formatter/FormatterInterface.html", "link": "Flintstone/Formatter/FormatterInterface.html#method_decode", "name": "Flintstone\\Formatter\\FormatterInterface::decode", "doc": "&quot;Decode a string into data&quot;"},
            
            {"type": "Class", "fromName": "Flintstone\\Formatter", "fromLink": "Flintstone/Formatter.html", "link": "Flintstone/Formatter/JsonFormatter.html", "name": "Flintstone\\Formatter\\JsonFormatter", "doc": "&quot;Encodes\/decodes data into JSON&quot;"},
                                                        {"type": "Method", "fromName": "Flintstone\\Formatter\\JsonFormatter", "fromLink": "Flintstone/Formatter/JsonFormatter.html", "link": "Flintstone/Formatter/JsonFormatter.html#method_encode", "name": "Flintstone\\Formatter\\JsonFormatter::encode", "doc": "&quot;Encode data into a string&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\Formatter\\JsonFormatter", "fromLink": "Flintstone/Formatter/JsonFormatter.html", "link": "Flintstone/Formatter/JsonFormatter.html#method_decode", "name": "Flintstone\\Formatter\\JsonFormatter::decode", "doc": "&quot;Decode a string into data&quot;"},
            
            {"type": "Class", "fromName": "Flintstone\\Formatter", "fromLink": "Flintstone/Formatter.html", "link": "Flintstone/Formatter/SerializeFormatter.html", "name": "Flintstone\\Formatter\\SerializeFormatter", "doc": "&quot;Encodes\/decodes data into a native PHP stored representation&quot;"},
                                                        {"type": "Method", "fromName": "Flintstone\\Formatter\\SerializeFormatter", "fromLink": "Flintstone/Formatter/SerializeFormatter.html", "link": "Flintstone/Formatter/SerializeFormatter.html#method_encode", "name": "Flintstone\\Formatter\\SerializeFormatter::encode", "doc": "&quot;Encode data into a string&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\Formatter\\SerializeFormatter", "fromLink": "Flintstone/Formatter/SerializeFormatter.html", "link": "Flintstone/Formatter/SerializeFormatter.html#method_decode", "name": "Flintstone\\Formatter\\SerializeFormatter::decode", "doc": "&quot;Decode a string into data&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});



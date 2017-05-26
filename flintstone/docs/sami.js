
(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:Flintstone" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Flintstone.html">Flintstone</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Flintstone_Cache" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Flintstone/Cache.html">Cache</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Flintstone_Cache_ArrayCache" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Flintstone/Cache/ArrayCache.html">ArrayCache</a>                    </div>                </li>                            <li data-name="class:Flintstone_Cache_CacheInterface" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Flintstone/Cache/CacheInterface.html">CacheInterface</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Flintstone_Formatter" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Flintstone/Formatter.html">Formatter</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Flintstone_Formatter_FormatterInterface" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Flintstone/Formatter/FormatterInterface.html">FormatterInterface</a>                    </div>                </li>                            <li data-name="class:Flintstone_Formatter_JsonFormatter" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Flintstone/Formatter/JsonFormatter.html">JsonFormatter</a>                    </div>                </li>                            <li data-name="class:Flintstone_Formatter_SerializeFormatter" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Flintstone/Formatter/SerializeFormatter.html">SerializeFormatter</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:Flintstone_Config" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Flintstone/Config.html">Config</a>                    </div>                </li>                            <li data-name="class:Flintstone_Database" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Flintstone/Database.html">Database</a>                    </div>                </li>                            <li data-name="class:Flintstone_Exception" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Flintstone/Exception.html">Exception</a>                    </div>                </li>                            <li data-name="class:Flintstone_Flintstone" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Flintstone/Flintstone.html">Flintstone</a>                    </div>                </li>                            <li data-name="class:Flintstone_Line" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Flintstone/Line.html">Line</a>                    </div>                </li>                            <li data-name="class:Flintstone_Validation" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Flintstone/Validation.html">Validation</a>                    </div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "Flintstone.html", "name": "Flintstone", "doc": "Namespace Flintstone"},{"type": "Namespace", "link": "Flintstone/Cache.html", "name": "Flintstone\\Cache", "doc": "Namespace Flintstone\\Cache"},{"type": "Namespace", "link": "Flintstone/Formatter.html", "name": "Flintstone\\Formatter", "doc": "Namespace Flintstone\\Formatter"},
            {"type": "Interface", "fromName": "Flintstone\\Cache", "fromLink": "Flintstone/Cache.html", "link": "Flintstone/Cache/CacheInterface.html", "name": "Flintstone\\Cache\\CacheInterface", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Flintstone\\Cache\\CacheInterface", "fromLink": "Flintstone/Cache/CacheInterface.html", "link": "Flintstone/Cache/CacheInterface.html#method_contains", "name": "Flintstone\\Cache\\CacheInterface::contains", "doc": "&quot;Check if a key exists in the cache.&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\Cache\\CacheInterface", "fromLink": "Flintstone/Cache/CacheInterface.html", "link": "Flintstone/Cache/CacheInterface.html#method_get", "name": "Flintstone\\Cache\\CacheInterface::get", "doc": "&quot;Get a key from the cache.&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\Cache\\CacheInterface", "fromLink": "Flintstone/Cache/CacheInterface.html", "link": "Flintstone/Cache/CacheInterface.html#method_set", "name": "Flintstone\\Cache\\CacheInterface::set", "doc": "&quot;Set a key in the cache.&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\Cache\\CacheInterface", "fromLink": "Flintstone/Cache/CacheInterface.html", "link": "Flintstone/Cache/CacheInterface.html#method_delete", "name": "Flintstone\\Cache\\CacheInterface::delete", "doc": "&quot;Delete a key from the cache.&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\Cache\\CacheInterface", "fromLink": "Flintstone/Cache/CacheInterface.html", "link": "Flintstone/Cache/CacheInterface.html#method_flush", "name": "Flintstone\\Cache\\CacheInterface::flush", "doc": "&quot;Flush the cache.&quot;"},
            
            {"type": "Interface", "fromName": "Flintstone\\Formatter", "fromLink": "Flintstone/Formatter.html", "link": "Flintstone/Formatter/FormatterInterface.html", "name": "Flintstone\\Formatter\\FormatterInterface", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Flintstone\\Formatter\\FormatterInterface", "fromLink": "Flintstone/Formatter/FormatterInterface.html", "link": "Flintstone/Formatter/FormatterInterface.html#method_encode", "name": "Flintstone\\Formatter\\FormatterInterface::encode", "doc": "&quot;Encode data into a string.&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\Formatter\\FormatterInterface", "fromLink": "Flintstone/Formatter/FormatterInterface.html", "link": "Flintstone/Formatter/FormatterInterface.html#method_decode", "name": "Flintstone\\Formatter\\FormatterInterface::decode", "doc": "&quot;Decode a string into data.&quot;"},
            
            
            {"type": "Class", "fromName": "Flintstone\\Cache", "fromLink": "Flintstone/Cache.html", "link": "Flintstone/Cache/ArrayCache.html", "name": "Flintstone\\Cache\\ArrayCache", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Flintstone\\Cache\\ArrayCache", "fromLink": "Flintstone/Cache/ArrayCache.html", "link": "Flintstone/Cache/ArrayCache.html#method_contains", "name": "Flintstone\\Cache\\ArrayCache::contains", "doc": "&quot;Check if a key exists in the cache.&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\Cache\\ArrayCache", "fromLink": "Flintstone/Cache/ArrayCache.html", "link": "Flintstone/Cache/ArrayCache.html#method_get", "name": "Flintstone\\Cache\\ArrayCache::get", "doc": "&quot;Get a key from the cache.&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\Cache\\ArrayCache", "fromLink": "Flintstone/Cache/ArrayCache.html", "link": "Flintstone/Cache/ArrayCache.html#method_set", "name": "Flintstone\\Cache\\ArrayCache::set", "doc": "&quot;Set a key in the cache.&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\Cache\\ArrayCache", "fromLink": "Flintstone/Cache/ArrayCache.html", "link": "Flintstone/Cache/ArrayCache.html#method_delete", "name": "Flintstone\\Cache\\ArrayCache::delete", "doc": "&quot;Delete a key from the cache.&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\Cache\\ArrayCache", "fromLink": "Flintstone/Cache/ArrayCache.html", "link": "Flintstone/Cache/ArrayCache.html#method_flush", "name": "Flintstone\\Cache\\ArrayCache::flush", "doc": "&quot;Flush the cache.&quot;"},
            
            {"type": "Class", "fromName": "Flintstone\\Cache", "fromLink": "Flintstone/Cache.html", "link": "Flintstone/Cache/CacheInterface.html", "name": "Flintstone\\Cache\\CacheInterface", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Flintstone\\Cache\\CacheInterface", "fromLink": "Flintstone/Cache/CacheInterface.html", "link": "Flintstone/Cache/CacheInterface.html#method_contains", "name": "Flintstone\\Cache\\CacheInterface::contains", "doc": "&quot;Check if a key exists in the cache.&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\Cache\\CacheInterface", "fromLink": "Flintstone/Cache/CacheInterface.html", "link": "Flintstone/Cache/CacheInterface.html#method_get", "name": "Flintstone\\Cache\\CacheInterface::get", "doc": "&quot;Get a key from the cache.&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\Cache\\CacheInterface", "fromLink": "Flintstone/Cache/CacheInterface.html", "link": "Flintstone/Cache/CacheInterface.html#method_set", "name": "Flintstone\\Cache\\CacheInterface::set", "doc": "&quot;Set a key in the cache.&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\Cache\\CacheInterface", "fromLink": "Flintstone/Cache/CacheInterface.html", "link": "Flintstone/Cache/CacheInterface.html#method_delete", "name": "Flintstone\\Cache\\CacheInterface::delete", "doc": "&quot;Delete a key from the cache.&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\Cache\\CacheInterface", "fromLink": "Flintstone/Cache/CacheInterface.html", "link": "Flintstone/Cache/CacheInterface.html#method_flush", "name": "Flintstone\\Cache\\CacheInterface::flush", "doc": "&quot;Flush the cache.&quot;"},
            
            {"type": "Class", "fromName": "Flintstone", "fromLink": "Flintstone.html", "link": "Flintstone/Config.html", "name": "Flintstone\\Config", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Flintstone\\Config", "fromLink": "Flintstone/Config.html", "link": "Flintstone/Config.html#method___construct", "name": "Flintstone\\Config::__construct", "doc": "&quot;Constructor.&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\Config", "fromLink": "Flintstone/Config.html", "link": "Flintstone/Config.html#method_getDir", "name": "Flintstone\\Config::getDir", "doc": "&quot;Get the dir.&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\Config", "fromLink": "Flintstone/Config.html", "link": "Flintstone/Config.html#method_setDir", "name": "Flintstone\\Config::setDir", "doc": "&quot;Set the dir.&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\Config", "fromLink": "Flintstone/Config.html", "link": "Flintstone/Config.html#method_getExt", "name": "Flintstone\\Config::getExt", "doc": "&quot;Get the ext.&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\Config", "fromLink": "Flintstone/Config.html", "link": "Flintstone/Config.html#method_setExt", "name": "Flintstone\\Config::setExt", "doc": "&quot;Set the ext.&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\Config", "fromLink": "Flintstone/Config.html", "link": "Flintstone/Config.html#method_useGzip", "name": "Flintstone\\Config::useGzip", "doc": "&quot;Use gzip?&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\Config", "fromLink": "Flintstone/Config.html", "link": "Flintstone/Config.html#method_setGzip", "name": "Flintstone\\Config::setGzip", "doc": "&quot;Set gzip.&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\Config", "fromLink": "Flintstone/Config.html", "link": "Flintstone/Config.html#method_getCache", "name": "Flintstone\\Config::getCache", "doc": "&quot;Get the cache.&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\Config", "fromLink": "Flintstone/Config.html", "link": "Flintstone/Config.html#method_setCache", "name": "Flintstone\\Config::setCache", "doc": "&quot;Set the cache.&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\Config", "fromLink": "Flintstone/Config.html", "link": "Flintstone/Config.html#method_getFormatter", "name": "Flintstone\\Config::getFormatter", "doc": "&quot;Get the formatter.&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\Config", "fromLink": "Flintstone/Config.html", "link": "Flintstone/Config.html#method_setFormatter", "name": "Flintstone\\Config::setFormatter", "doc": "&quot;Set the formatter.&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\Config", "fromLink": "Flintstone/Config.html", "link": "Flintstone/Config.html#method_getSwapMemoryLimit", "name": "Flintstone\\Config::getSwapMemoryLimit", "doc": "&quot;Get the swap memory limit.&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\Config", "fromLink": "Flintstone/Config.html", "link": "Flintstone/Config.html#method_setSwapMemoryLimit", "name": "Flintstone\\Config::setSwapMemoryLimit", "doc": "&quot;Set the swap memory limit.&quot;"},
            
            {"type": "Class", "fromName": "Flintstone", "fromLink": "Flintstone.html", "link": "Flintstone/Database.html", "name": "Flintstone\\Database", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Flintstone\\Database", "fromLink": "Flintstone/Database.html", "link": "Flintstone/Database.html#method___construct", "name": "Flintstone\\Database::__construct", "doc": "&quot;Constructor.&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\Database", "fromLink": "Flintstone/Database.html", "link": "Flintstone/Database.html#method_getName", "name": "Flintstone\\Database::getName", "doc": "&quot;Get the database name.&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\Database", "fromLink": "Flintstone/Database.html", "link": "Flintstone/Database.html#method_setName", "name": "Flintstone\\Database::setName", "doc": "&quot;Set the database name.&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\Database", "fromLink": "Flintstone/Database.html", "link": "Flintstone/Database.html#method_getConfig", "name": "Flintstone\\Database::getConfig", "doc": "&quot;Get the config.&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\Database", "fromLink": "Flintstone/Database.html", "link": "Flintstone/Database.html#method_setConfig", "name": "Flintstone\\Database::setConfig", "doc": "&quot;Set the config.&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\Database", "fromLink": "Flintstone/Database.html", "link": "Flintstone/Database.html#method_getPath", "name": "Flintstone\\Database::getPath", "doc": "&quot;Get the path to the database file.&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\Database", "fromLink": "Flintstone/Database.html", "link": "Flintstone/Database.html#method_openTempFile", "name": "Flintstone\\Database::openTempFile", "doc": "&quot;Open a temporary file.&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\Database", "fromLink": "Flintstone/Database.html", "link": "Flintstone/Database.html#method_readFromFile", "name": "Flintstone\\Database::readFromFile", "doc": "&quot;Read lines from the database file.&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\Database", "fromLink": "Flintstone/Database.html", "link": "Flintstone/Database.html#method_appendToFile", "name": "Flintstone\\Database::appendToFile", "doc": "&quot;Append a line to the database file.&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\Database", "fromLink": "Flintstone/Database.html", "link": "Flintstone/Database.html#method_flushFile", "name": "Flintstone\\Database::flushFile", "doc": "&quot;Flush the database file.&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\Database", "fromLink": "Flintstone/Database.html", "link": "Flintstone/Database.html#method_writeTempToFile", "name": "Flintstone\\Database::writeTempToFile", "doc": "&quot;Write temporary file contents to database file.&quot;"},
            
            {"type": "Class", "fromName": "Flintstone", "fromLink": "Flintstone.html", "link": "Flintstone/Exception.html", "name": "Flintstone\\Exception", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "Flintstone", "fromLink": "Flintstone.html", "link": "Flintstone/Flintstone.html", "name": "Flintstone\\Flintstone", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Flintstone\\Flintstone", "fromLink": "Flintstone/Flintstone.html", "link": "Flintstone/Flintstone.html#method___construct", "name": "Flintstone\\Flintstone::__construct", "doc": "&quot;Constructor.&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\Flintstone", "fromLink": "Flintstone/Flintstone.html", "link": "Flintstone/Flintstone.html#method_getDatabase", "name": "Flintstone\\Flintstone::getDatabase", "doc": "&quot;Get the database.&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\Flintstone", "fromLink": "Flintstone/Flintstone.html", "link": "Flintstone/Flintstone.html#method_setDatabase", "name": "Flintstone\\Flintstone::setDatabase", "doc": "&quot;Set the database.&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\Flintstone", "fromLink": "Flintstone/Flintstone.html", "link": "Flintstone/Flintstone.html#method_getConfig", "name": "Flintstone\\Flintstone::getConfig", "doc": "&quot;Get the config.&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\Flintstone", "fromLink": "Flintstone/Flintstone.html", "link": "Flintstone/Flintstone.html#method_setConfig", "name": "Flintstone\\Flintstone::setConfig", "doc": "&quot;Set the config.&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\Flintstone", "fromLink": "Flintstone/Flintstone.html", "link": "Flintstone/Flintstone.html#method_get", "name": "Flintstone\\Flintstone::get", "doc": "&quot;Get a key from the database.&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\Flintstone", "fromLink": "Flintstone/Flintstone.html", "link": "Flintstone/Flintstone.html#method_set", "name": "Flintstone\\Flintstone::set", "doc": "&quot;Set a key in the database.&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\Flintstone", "fromLink": "Flintstone/Flintstone.html", "link": "Flintstone/Flintstone.html#method_delete", "name": "Flintstone\\Flintstone::delete", "doc": "&quot;Delete a key from the database.&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\Flintstone", "fromLink": "Flintstone/Flintstone.html", "link": "Flintstone/Flintstone.html#method_flush", "name": "Flintstone\\Flintstone::flush", "doc": "&quot;Flush the database.&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\Flintstone", "fromLink": "Flintstone/Flintstone.html", "link": "Flintstone/Flintstone.html#method_getKeys", "name": "Flintstone\\Flintstone::getKeys", "doc": "&quot;Get all keys from the database.&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\Flintstone", "fromLink": "Flintstone/Flintstone.html", "link": "Flintstone/Flintstone.html#method_getAll", "name": "Flintstone\\Flintstone::getAll", "doc": "&quot;Get all data from the database.&quot;"},
            
            {"type": "Class", "fromName": "Flintstone\\Formatter", "fromLink": "Flintstone/Formatter.html", "link": "Flintstone/Formatter/FormatterInterface.html", "name": "Flintstone\\Formatter\\FormatterInterface", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Flintstone\\Formatter\\FormatterInterface", "fromLink": "Flintstone/Formatter/FormatterInterface.html", "link": "Flintstone/Formatter/FormatterInterface.html#method_encode", "name": "Flintstone\\Formatter\\FormatterInterface::encode", "doc": "&quot;Encode data into a string.&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\Formatter\\FormatterInterface", "fromLink": "Flintstone/Formatter/FormatterInterface.html", "link": "Flintstone/Formatter/FormatterInterface.html#method_decode", "name": "Flintstone\\Formatter\\FormatterInterface::decode", "doc": "&quot;Decode a string into data.&quot;"},
            
            {"type": "Class", "fromName": "Flintstone\\Formatter", "fromLink": "Flintstone/Formatter.html", "link": "Flintstone/Formatter/JsonFormatter.html", "name": "Flintstone\\Formatter\\JsonFormatter", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Flintstone\\Formatter\\JsonFormatter", "fromLink": "Flintstone/Formatter/JsonFormatter.html", "link": "Flintstone/Formatter/JsonFormatter.html#method_encode", "name": "Flintstone\\Formatter\\JsonFormatter::encode", "doc": "&quot;Encode data into a string.&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\Formatter\\JsonFormatter", "fromLink": "Flintstone/Formatter/JsonFormatter.html", "link": "Flintstone/Formatter/JsonFormatter.html#method_decode", "name": "Flintstone\\Formatter\\JsonFormatter::decode", "doc": "&quot;Decode a string into data.&quot;"},
            
            {"type": "Class", "fromName": "Flintstone\\Formatter", "fromLink": "Flintstone/Formatter.html", "link": "Flintstone/Formatter/SerializeFormatter.html", "name": "Flintstone\\Formatter\\SerializeFormatter", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Flintstone\\Formatter\\SerializeFormatter", "fromLink": "Flintstone/Formatter/SerializeFormatter.html", "link": "Flintstone/Formatter/SerializeFormatter.html#method_encode", "name": "Flintstone\\Formatter\\SerializeFormatter::encode", "doc": "&quot;Encode data into a string.&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\Formatter\\SerializeFormatter", "fromLink": "Flintstone/Formatter/SerializeFormatter.html", "link": "Flintstone/Formatter/SerializeFormatter.html#method_decode", "name": "Flintstone\\Formatter\\SerializeFormatter::decode", "doc": "&quot;Decode a string into data.&quot;"},
            
            {"type": "Class", "fromName": "Flintstone", "fromLink": "Flintstone.html", "link": "Flintstone/Line.html", "name": "Flintstone\\Line", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Flintstone\\Line", "fromLink": "Flintstone/Line.html", "link": "Flintstone/Line.html#method___construct", "name": "Flintstone\\Line::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\Line", "fromLink": "Flintstone/Line.html", "link": "Flintstone/Line.html#method_getLine", "name": "Flintstone\\Line::getLine", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\Line", "fromLink": "Flintstone/Line.html", "link": "Flintstone/Line.html#method_getKey", "name": "Flintstone\\Line::getKey", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\Line", "fromLink": "Flintstone/Line.html", "link": "Flintstone/Line.html#method_getData", "name": "Flintstone\\Line::getData", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Flintstone", "fromLink": "Flintstone.html", "link": "Flintstone/Validation.html", "name": "Flintstone\\Validation", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Flintstone\\Validation", "fromLink": "Flintstone/Validation.html", "link": "Flintstone/Validation.html#method_validateKey", "name": "Flintstone\\Validation::validateKey", "doc": "&quot;Validate the key.&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\Validation", "fromLink": "Flintstone/Validation.html", "link": "Flintstone/Validation.html#method_validateData", "name": "Flintstone\\Validation::validateData", "doc": "&quot;Check the data type is valid.&quot;"},
                    {"type": "Method", "fromName": "Flintstone\\Validation", "fromLink": "Flintstone/Validation.html", "link": "Flintstone/Validation.html#method_validateDatabaseName", "name": "Flintstone\\Validation::validateDatabaseName", "doc": "&quot;Check the database name is valid.&quot;"},
            
            
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



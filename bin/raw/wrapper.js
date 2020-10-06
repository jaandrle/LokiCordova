/* jshint maxdepth: 3 */
/* global self */
(function (root, factory) {
    /* jshint ignore:start */
    var depends= ["loki"];
    var getDep;
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(depends, factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        getDep= function(name){ return require(name); };
        module.exports = factory.apply(root, depends.map(getDep));
    } else {
        // Browser globals (root is window)
        getDep= function(name){ return root[name]; };
        root.LokiCordova = factory.apply(root, depends.map(getDep));
    }
    /* jshint ignore:end */
}(typeof self !== 'undefined' ? self : this, function (/* ..._dependencies */) {
    "use strict";
    var _dependencies= Array.prototype.slice.call(arguments);
    /**
     * [JSDoc: Class: Loki](http://techfort.github.io/LokiJS/Loki.html)
     * @class loki
     * @private
     */
    const LokiJS= _dependencies[0];
    /**
     * Typy v rámci [Loki](http://techfort.github.io/LokiJS) databáze a nebo v rámci této knihovny.
     * @namespace types
     */
    /**
     * Instance `loki` (resp. {@link LokiWithUtils}), viz [JSDoc: Class: Loki](http://techfort.github.io/LokiJS/Loki.html).
     * @typedef {Object} DATABAZE
     * @memberof types
     */
    /**
     * Instance `Collection`, viz [JSDoc: Class: Collection](http://techfort.github.io/LokiJS/Collection.html).
     * @typedef {Object} TABULKA
     * @memberof types
     */
    /**
     * Záznam z {@link types.TABULKA}, viz [JSDoc: Class: Resultset](http://techfort.github.io/LokiJS/Resultset.html).
     * @typedef {Object} RADEK
     * @memberof types
     */
    /**
     * Data ve formátu pro uložení do {@link types.TABULKA}. Jedná se o **obyčejný objekt**, který si loki převede na {@link types.RADEK}.
     * 
     * Nedoporučuje se, aby dědil informace z {@link types.RADEK} (PS: objekty se předávají **referencí!!!**).
     * @typedef {Object} DATA
     * @memberof types
     * @example <caption>očekávané</caption>
     * const data_1= { name: "Jan", surname: "Andrle" };
     * const data_2= Object.assign(Object.create(null), data_1);
     * const radek: types.RADEK; / * vystup například z *.findOne * /
     * const data_3= { name: radek.name, surname: radek.surname };
     * @example <caption>**neočekávané**</caption>
     * const radek: types.RADEK; / * vystup například z *.findOne * /
     * const data_1= radek;
     * const data_2= { $loki: 1 };
     * const data_3= { meta: { / * … * / } };
     * const data_4= { $loki: 5, meta: { / * … * / } };
     */
    /**
     * Dotaz na {@link types.RADEK} (jeden, či více), viz [JSDoc: Tutorial: Query Examples](http://techfort.github.io/LokiJS/tutorial-Query%20Examples.html).
     * 
     * *Tyto dotazy jsou výhodnější na použití než `*.where`, protože jsou optimalizované (případně optimalizovatlené) – viz [JSDoc: Tutorial: Indexing and Query performance](http://techfort.github.io/LokiJS/tutorial-Indexing%20and%20Query%20performance.html)!*
     * @typedef {object} DOTAZ
     * @memberof types
     * @example <caption>Vyhledání uživatele/ů obsahující ve jméně 'Jan' a jejichž věk je >=28</caption>
     * const dotaz= { $and: [ { name: { $contains: "Jan" } }, { age: { $gte: 28 } } ] };
     */
    /**
     * Předpřipravené sekvence úkonů pro databázi LokiJS (viz [JSDoc: Tutorial: Collection Transforms](http://techfort.github.io/LokiJS/tutorial-Collection%20Transforms.html)).
     * 
     * Lze používat:
     * - [`*.transform(transform: **DB_TRANSFORMS**, parameters: **object**)`](http://techfort.github.io/LokiJS/Resultset.html#transform)
     * - [*.chain(transform: **DB_TRANSFORMS**, parameters: **object**)](http://techfort.github.io/LokiJS/Collection.html#chain)
     * @typedef {Object[]} DB_TRANSFORMACE
     * @memberof types
     */
    /**
     * Parametry pro inicializaci [JSDoc: Class: Loki](http://techfort.github.io/LokiJS/Loki.html#Loki).
     * @typedef {object} loki_options
     * @memberof types
     */
    /* cordova *//* global cordova *///gulp.keep.line
    
    function defaultOptions(){
        /**
         * Parametry pro {@link FSAdapter}
         * @memberof types
         * @typedef {object} FSAdapter_options
         * @param {string} [prefix=loki] Pro ukládání se používá jméno databáze z `loki` a prefix, definovaný zde.
         * @param {string} [target_location=cordova.file.dataDirectory] Cesta pro uložení databáze
         */
        return {
            prefix: "loki",
            target_location: cordova.file.dataDirectory
        };
    }
    var _createClass= (function(){
        function defineProperties(target, props){
            for (var key in props){
                var prop = props[key];
                prop.configurable = true;
                if (prop.value) prop.writable = true;
            }
            Object.defineProperties(target, props);
        }
        return function (Constructor, protoProps, staticProps){
            if(protoProps) defineProperties(Constructor.prototype, protoProps);
            if(staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    })();
    var _classCallCheck= function(instance, Constructor){
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    };

    var Object_assign= Object.assign;
    /**
     * Třída (adaptér) pro ukládání `loki` v cordově do souborů.
     * @class FSAdapter
     * @public
     * @param {types.FSAdapter_options} options 
     */
    function FSAdapter(options) {
        _classCallCheck(this, FSAdapter);
        this.options= Object_assign(defaultOptions(), options);
    }
    var instance_methods= {};

    var _inherits= function(subClass, superClass){
        if(typeof superClass !== "function" && superClass !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            
        subClass.prototype= Object.create(superClass&&superClass.prototype, {
            constructor: { value: subClass, enumerable: false, writable: true, configurable: true }
        });
        /* jshint ignore:start *///gulp.keep.line
        if(superClass) subClass.__proto__= superClass;
        /* jshint ignore:end *///gulp.keep.line
    };
    /**
     * @class FSAdapterError
     * @public
     */
    var FSAdapterError = (function (_Error) {
        function FSAdapterError() {
            _classCallCheck(this, FSAdapterError);
            if (_Error != null) { _Error.apply(this, arguments); }
        }
        _inherits(FSAdapterError, _Error);
        return FSAdapterError;
    })(Error);
    var TAG = "[FSAdapter]";
    var debug_log= function(){};
    
    instance_methods.deleteDatabase= {
        value: function deleteDatabase(dbname, callback) {
            var _this = this;
            debug_log(TAG, "delete database");
            window.resolveLocalFileSystemURL(_this.options.target_location, function (dir) {
                var fileName = _this.options.prefix + "__" + dbname;
                // Very important to have { create: true }
                dir.getFile(fileName, { create: true }, function(fileEntry) {
                    fileEntry.remove(function() {
                      callback();
                    }, function (err) {
                        debug_log(TAG, "error delete file", err);
                        throw new FSAdapterError("Unable delete file" + JSON.stringify(err));
                    });
                }, function (err) {
                    debug_log(TAG, "error delete database", err);
                    throw new FSAdapterError("Unable delete database" + JSON.stringify(err));
                });
            }, function (err) {
                throw new FSAdapterError("Unable to resolve local file system URL" + JSON.stringify(err));
            });
        }
    };

    
    instance_methods.loadDatabase= {
        value: function loadDatabase(dbname, callback) {
            debug_log(TAG, "loading database");
            this._getFile(dbname, function (fileEntry) {
                fileEntry.file(function (file) {
                    var reader = new FileReader();
                    reader.onloadend = function (event) {
                        var contents = event.target.result;
                        if (contents.length === 0) {
                            //console.warn(TAG, "couldn't find database");
                            callback(null);
                        } else {
                            callback(contents);
                        }
                    };
                    reader.readAsText(file);
                }, function (err) {
                    debug_log(TAG, "error reading file", err);
                    callback(new FSAdapterError("Unable to read file" + err.message));
                });
            }, function (err) {
                debug_log(TAG, "error getting file", err);
                callback(new FSAdapterError("Unable to get file: " + err.message));
            });
        }
    };

    
    instance_methods.saveDatabase= {
        value: function saveDatabase(dbname, dbstring, callback) {
            var _this = this;
    
            debug_log(TAG, "saving database");
            this._getFile(dbname, function (fileEntry) {
                fileEntry.createWriter(function (fileWriter) {
                    fileWriter.onwriteend = function () {
                        if (fileWriter.length === 0) {
                            var blob = _this._createBlob(dbstring, "text/plain");
                            fileWriter.write(blob);
                            callback();
                        }
                    };
                    fileWriter.truncate(0);
                }, function (err) {
                    debug_log(TAG, "error writing file", err);
                    throw new FSAdapterError("Unable to write file" + JSON.stringify(err));
                });
            }, function (err) {
                debug_log(TAG, "error getting file", err);
                throw new FSAdapterError("Unable to get file" + JSON.stringify(err));
            });
        }
    };

    instance_methods._createBlob= {
        // adapted from http://stackoverflow.com/questions/15293694/blob-constructor-browser-compatibility
    
        value: function _createBlob(data, datatype) {
            var blob;
    
            try {
                blob = new Blob([data], { type: datatype });
            } catch (err) {
                window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
    
                if (err.name === "TypeError" && window.BlobBuilder) {
                    var bb = new window.BlobBuilder();
                    bb.append(data);
                    blob = bb.getBlob(datatype);
                } else if (err.name === "InvalidStateError") {
                    // InvalidStateError (tested on FF13 WinXP)
                    blob = new Blob([data], { type: datatype });
                } else {
                    // We're screwed, blob constructor unsupported entirely
                    throw new FSAdapterError("Unable to create blob" + JSON.stringify(err));
                }
            }
            return blob;
        }
    };

    instance_methods._getFile= {
        value: function _getFile(name, handleSuccess, handleError) {
            var _this = this;
    
            window.resolveLocalFileSystemURL(_this.options.target_location, function (dir) {
                var fileName = _this.options.prefix + "__" + name;
                dir.getFile(fileName, { create: true }, handleSuccess, handleError);
            }, function (err) {
                throw new FSAdapterError("Unable to resolve local file system URL" + JSON.stringify(err));
            });
        }
    };
    _createClass(FSAdapter, instance_methods);

    /**
     * Jmenný prostor obsahující pomocné utility pro práci s tabulkami/databází
     * @namespace db_utils
     * @private
     */
    const loki_utils= (function loki_utils_iief(){
        /**
         * Krok v {@link types.DB_TRANSFORMACE} sloužící k fyzickému sloučení záznamů. Vždy se jedná o "Left Join" transformované tabulky!
         * @property {object}
         * @param {object[]|types.RADEK[]|types.TABULKA} data Odpovídá `joinData` v [eqJoin](http://techfort.github.io/LokiJS/Collection.html#eqJoin)
         * @param {string} left_key Jméno klíče ke sloučení v levé tabulce
         * @param {string} right_key Jméno klíče ke sloučení v pravé tabulce
         * @memberof db_utils
         * @inner
         */
        const join_step= {
            type: 'eqJoin',
            joinData: "[%lktxp]data",
            leftJoinKey: "[%lktxp]left_key",
            rightJoinKey: "[%lktxp]right_key",
        };
        /**
         * Transformace pro {@link db} zjednodušující joinováni v rámci LokiJS. Vrátí výsledky z hlavní ("levé") tabulky a korespondující záznam z pravé (případně prázdný objekt).
         * 
         * Využívá {@link db_utils~join_step}
         * @property {types.DB_TRANSFORMACE}
         * @memberof db_utils
         * @example <caption>Pokud `tb` a `db` dle funkce `database_`</caption>
         * tb.table.chain().transform(db.utils.left_join, { data: tb.another_table.chain(), left_key: "left_key", right_key: "right_key" }).data();
         */
        const left_join= [
            join_step
        ];
        /**
         * Transformace pro {@link db} zjednodušující joinováni v rámci LokiJS. Vrátí výsledky z hlavní ("levé") tabulky a korespondující záznamy z pravé (pokud existují).
         * 
         * Využívá {@link db_utils~join_step}
         * @property {types.DB_TRANSFORMACE}
         * @memberof db_utils
         * @example <caption>Pokud `tb` a `db` dle funkce `database_`</caption>
         * tb.table.chain().transform(db.utils.left_join_strict, { data: tb.another_table.chain(), left_key: "left_key", right_key: "right_key" }).data();
         */
        const left_join_strict= [
            join_step,
            {
                type: "where",
                value: ({ right })=> right&&typeof right.$loki!== "undefined"
            }
        ];
        /**
         * Uložení změn v databázi
         * @memberof db_utils
         * @param {types.DATABAZE} database
         * @returns {Promise}
         * @.then {undefined} Volá se při úspěchu
         * @.catch {Error} Volá se při chybě `Error`
         */
        function save_(database){
            return new Promise(function(resolve,reject){
                database.saveDatabase(err=> err ? reject(err) : resolve());
            });
        }
        /**
         * Pomocná funkce pro vložení/aktualizování záznamu v tabulce `colection`.
         * @memberof db_utils
         * @param {types.TABULKA} collection Cílová tabulka
         * @param {types.DATA} updated_data Aktualizovaná data (předávaná referencí!)
         * @param {types.DOTAZ} query Argument pro {@link tb.findOne}
         * @returns {number} 0/1 záznam aktualizován/vložen
         * @example <caption>Pokud `tb` a `db` dle funkce `database_`</caption>
         * db.utils.upsertByQuery(tb.tabulka, { age: 28 }, { $and: [ { name: "Jan" }, { surname: "Andrle" } ] });
         */
        function upsertByQuery(collection, updated_data, query){
            const row= collection.findOne(query);
            if(row){
                collection.update(Object.assign(row, updated_data));
                return 0;
            }
            collection.insert(updated_data);
            return 1;
        }
        /**
         * Pomocná funkce pro vložení/aktualizování záznamu v tabulce `colection`.
         * @memberof db_utils
         * @param {types.TABULKA} collection Cílová tabulka
         * @param {types.DATA} updated_data Aktualizovaná data (předávaná referencí!)
         * @param {string} [key=id] Jméno obecného klíče, které slouží vlastně jako identifikátor pro {@link tb.findOne} (`{ [key]: updated_data[key] }`)
         * @returns {number} 0/1 záznam aktualizován/vložen
         * @example <caption>Pokud `tb` a `db` dle funkce `database_`</caption>
         * db.utils.upsertByKey(tb.tabulka, { id: 15, age: 28 });
         * db.utils.upsertByKey(tb.tabulka, { key: 15, age: 28 }, "key");
         */
        function upsertByKey(collection, updated_data, key= "id"){
            const row= collection.findOne({ [key]: updated_data[key] });
            if(row){
                collection.update(Object.assign(row, updated_data));
                return 0;
            }
            collection.insert(updated_data);
            return 1;
        }
        /**
         * Pomocná funkce pro vložení/aktualizování záznamu v tabulce `colection`.
         * @memberof db_utils
         * @param {types.TABULKA} collection Cílová tabulka
         * @param {types.DATA} updated_data Aktualizovaná data (předávaná referencí!)
         * @param {string} [key=id] Jméno unikátního klíče, které slouží jako identifikátor pro [`Collection.prototype.by`](http://techfort.github.io/LokiJS/lokijs.js.html#line6608) nebo [`Collection.prototype.get`](http://techfort.github.io/LokiJS/lokijs.js.html#line6109) (tedy "$loki").
         * @returns {number} 0/1 záznam aktualizován/vložen
         * @throws {Error} Vyhodí chybu pokud je `key="$loki"` a aktualizovaná data obsahují tuto hodnotu vyplněnou (`{ $loki: 15, … }`) – přičemž není v databázi. Jde totiž o to, že `$loki` se autoinkrementuje! Takže jiná hodnota než již existující (aktualizace záznamu) či prázdná (přidání) nedává smysl.
         * @example <caption>Pokud `tb` a `db` dle funkce `database_`</caption>
         * db.utils.upsertByUnique(tb.tabulka, { $loki: 1, age: 28 });
         * db.utils.upsertByUnique(tb.tabulka, { age: 28 });
         * 
         * db.utils.upsertByUnique(tb.tabulka, { id: 1, age: 28 }, "id");
         */
        function upsertByUnique(collection, updated_data, key= "id"){
            const value= updated_data[key];
            const is_$loki= key==="$loki", is_filled= typeof value!=="undefined";
            const row= !is_$loki ? collection.by(key, value) : ( is_filled ? collection.get(value) : null);
            if(row){
                collection.update(Object.assign(row, updated_data));
                return 0;
            }
            if(is_$loki&&is_filled)
                throw new Error("Klíči `$loki` nelze nastavit jakoukoliv hodnotu! Tato funkce tedy akceptuje pouze vyplnění existujícím záznamem, či nevyplněno (=přidání nového záznamu).");
            collection.insert(updated_data);
            return 1;
        }
        /**
         * **WIP**
         * @memberof db_utils
         * @param {types.TABULKA} collection
         * @param {function} updateInsert
         * @param {function} find
         * @returns {function}
         */
        function upsertByCallbacks(collection, updateInsert, find= (c, { id })=> c.findOne({ id })){
            return function(updated_data){
                const row= find(collection, updated_data);
                if(row){
                    collection.update(updateInsert(row, updated_data));
                    return 0;
                }
                collection.insert(updateInsert(row, updated_data));
                return 1;
            };
        }
        return { left_join, left_join_strict, save_, upsertByQuery, upsertByKey, upsertByUnique, upsertByCallbacks };
    })();
    /**
     * Zavedení databáze
     * @param {string} file Jméno souboru pro `loki`
     * @param {object} params Parametry pro `loki`
     * @returns {Promise}
     * @.then {LokiJS} `db` Instance `loki`, tj. konkrétní databáze.
     * @.catch {Error}
     */
    function create_(file, params){
        var db;
        return new Promise((resolve, reject)=> {
            params.autoloadCallback= ()=> resolve(db);
            try {
                db= new LokiJS(file, params);
            } catch (e){
                reject(e);
            }
        });
    }
    /**
     * Veřejná funkce pro inicializaci databáze pro {@link LokiJS}.
     * @method database_
     * @public
     * @param {object} def
     * @param {object} def.db_file
     * @param {string} [def.db_file.file=db.json] Pro `loki` se jedná o jméno databáze, pro nás i výsledné jméno souboru (viz také `db_file.prefix`).
     * @param {string} [def.db_file.prefix=loki] Prefix pro název souboru
     * @param {types.loki_options} [def.params={autoload:true}]
     * @param {string[]} [def.tables=[]] Jména tabulek (N). Tento seznam se porovná s interním (I) seznamem. Tyto seznamy se porovnají a případně se vytvoří/smažou tabulky (např. tabulky v N, které nejsou v I se smažou v databázi).
     * @param {boolean} [def.auto_cordova_adapter=true] Nastavení/autonačtení ukládání pomocí {@link FSAdapter}.
     * @returns {Promise}
     * @.then {object} {db: {@link types.DATABAZE}, db_utils: {@link db_utils}, tb: {@link types.TABULKA}[]}
     * @.catch {Error}
     */
    function database_({
        db_file: { file= "db.json", prefix= "loki" }= {},
        params= { autoload: true },
        tables= [],
        auto_cordova_adapter= true
    }= {}){
        if(auto_cordova_adapter)
            params.adapter= new FSAdapter({ prefix });
        return create_(file, params)
        .then(function(db){
            let tb= {};
            let local_tables= db.listCollections().map(v=>v.name);
            let actual_table= "", command= "", local_tables_index= -1;
            for(let i= 0, i_length= tables.length; i < i_length; i++){
                actual_table= tables[i];
                command= "addCollection";
                if(local_tables.length){
                    local_tables_index= local_tables.indexOf(actual_table);
                    if(local_tables_index!==-1){
                        local_tables.splice(local_tables_index, 1);
                        command= "getCollection";
                    }
                }
                tb[actual_table]= db[command](actual_table);
            }
            for(let i=0, i_length= local_tables.length; i<i_length; i++){ db.removeCollection(local_tables[i]); }
            db.saveDatabase();
            return { db, db_utils: loki_utils, tb };
        });
    }
    return { FSAdapter, FSAdapterError, database_ };
}));
declare namespace BMap{
    export class Map{
        constructor(container:string|HTMLElement,opts?:MapOptions);
        enableDragging():void;
        disableDragging():void;
        enableScrollWheelZoom():void;
        disableScrollWheelZoom():void;
        enableDoubleClickZoom():void;
        disableDoubleClickZoom():void;
        enableKeyboard():void;
        disableKeyboard():void;
        enableInertialDragging():void;
        disableInertialDragging():void;
        enableContinuousZoom():void;
        disableContinuousZoom():void;
        enablePinchToZoom():void;
        disablePinchToZoom():void;
        enableAutoResize():void;
        disableAutoResize():void;
        setDefaultCursor(cursor:string):void;
        getDefaultCursor():string;
        setDraggingCursor(cursor:string):void;
        getDraggingCursor():string;
        setMinZoom(zoom:number):void;
        setMaxZoom(zoom:number):void;
        setMapStyle():void;
        setPanorama(pano:Panorama);
        
        getBounds():Bounds;
        getCenter():Point;
        getDistance(start:Point, end:Point):number;
        getMapType():MapTypes;
        getSize():Size;
        getViewport(view: Array<Point>,viewportOptions?:ViewportOptions);
        getZoom():number;
        getPanorama():Panorama;
        
        centerAndZoom(center:Point, zoom:number):void;
        panTo(center:Point, opts?:PanOptions):void;
        panBy(x:number, y:number, opts?:PanOptions):void;
        reset():void;
        setCenter(center:Point|string):void;
        setCurrentCity(city:string):void;
        setMapType(mapType:MapTypes):void;
        setViewport(view:Array<Point>|Viewport,viewportOptions?:ViewportOptions):void;
        zoomTo(zoom:number):void;
        setZoom(zoom:number):void;
        highResolutionEnabled():boolean;
        zoomIn():void;
        zoomOut():void;
        addHotspot(hotspot:Hotspot):void;
        removeHotspot(hotspot:Hotspot):void;
        clearHotspots():void;
        
        addControl(control:Control):void;
        removeControl(control:Control);
        getContainer():HTMLElement;
        
        addContextMenu(menu:ContextMenu):void;
        removeContextMenu(menu:ContextMenu):void;
        
        addOverlay(overlay:Overlay):void;
        removeOverlay(overlay:Overlay):void;
        clearOverlays():void;
        openInfoWindow(infoWnd:InfoWindow, point:Point):void;
        closeInfoWindow():void;
        pointToOverlayPixel(point:Point):Pixel;
        overlayPixelToPoint(pixel:Pixel):Point;
        getInfoWindow():InfoWindow|any;
        getOverlays():Array<Overlay>;
        getPanes():MapPanes;
        
        addTileLayer(tileLayer:TileLayer):void;
        removeTileLayer(tilelayer:TileLayer):void;
        getTileLayer(mapType:string):TileLayer;
        
        pixelToPoint(pixel:Pixel):Point;
        pointToPixel(point:Point):Pixel;
    } 
    export interface PanOptions{
        noAnimation?:boolean;
    }
    export interface MapOptions{
        zoonLevelMin?:number;
        zoomLevelMax?:number;
        minZoom?:number;
        maxZoom?:number;
        mapType?:MapTypes;
        enableHighResolution?:boolean;
        enableAutoResize?:boolean;
        enableMapClick?:boolean;
    }
    export class Viewport{
        center:Point;
        zoom:number;
    }
    export interface ViewportOptions{
        enableAnimation?:boolean;
        margins?:Array<number>;
        zoomFactor?:number;
        delay?:number;
    }
    export class APIVersion{
        static BMAP_API_VERSION:number;
    }
    export class MapTypes{
        features:Array<any>;
        style:string;
    }
    
    
    export class Point{
        constructor(lng:number,lat:number);
        equals(other:Point):boolean;
        lng:number;
        lat:number;
    }
    export class Pixel{
        constructor(x:number,y:number);
        x:number;
        y:number;
        equals(other:Pixel);
    }
    export class Bounds{
        constructor(sw:Point,ne:Point);
        eqauls(other:Bounds):boolean;
        containsPoint(point:Point):boolean;
        containsBounds(bounds:Bounds):boolean;
        intersects(other:Bounds):Bounds;
        extend(point:Point):void;
        getCenter():Point;
        isEmpty():boolean;
        getSouthWest():Point;
        getNorthEast():Point;
        toSpan():Point;
    }
    export class Size{
        constructor(width:number,height:number);
        width:number;
        height:number;
        equals(other:Size):boolean;
    }
    
    
    export class Control{
        constructor();
        defaultAnchor:ControlAnchor;
        defaultOffset:Size;
        initialize(map:Map):HTMLElement;
        setAnchor(anchor:ControlAnchor):void;
        getAnchor():ControlAnchor;
        setOffset(offset:Size):void;
        getOffset():Size;
        show():void;
        hide():void;
        isVisible():void;
    }
    export interface NavigationControlOptions{
        anchor?:ControlAnchor;
        offset?:Size;
        type?:NavigationControlType;
        showZoomInfo?:boolean;
        enableGeolocation?:boolean;
    }
    export interface ScaleControlOptions{
        anchor?:ControlAnchor;
        offset?:Size;
    }
    export interface CopyrightControlOptions{
        anchor?:ControlAnchor;
        offset?:Size;
    }
    export enum ControlAnchor {
        BMAP_ANCHOR_TOP_LEFT,
        BMAP_ANCHOR_TOP_RIGHT,
        BMAP_ANCHOR_BOTTOM_LEFT,
        BMAP_ANCHOR_BOTTOM_RIGHT
    }
    export class OverviewMapControl{
        constructor(opts?:OverviewMapControlOptions);
        changeView():void;
        setSize(size:Size):void;
        getSize():Size;
    }
    export enum LengthUnit{
        BMAP_UNIT_METRIC,
        BMAP_UNIT_IMPERIAL
    }
    export class MapTypeControl{
        constructor(opts?:MapTypeControlOptions);
    }
    export class NavigationControl{
        constructor(type?:NavigationControlOptions);
        getTypes():NavigationControlType;
        setTypes(type:NavigationControlType):void;
    }
    export interface OverviewMapControlOptions{
        anchor?:ControlAnchor;
        offset?:Size;
        size?:Size;
        isOpen?:boolean;
    }
    export class CopyrightControl{
        constructor(opts?:CopyrightControlOptions);
        addCopyright(copyright:Copyright):void;
        removeCopyright(id):void;
        getCopyright(id):Copyright;
        getCopyrightCollection():Array<Copyright>;
    }
    export interface MapTypeControlOptions{
        type?:MapTypeControlType;
        mapTypes?:Array<MapType>;
    }
    export enum NavigationControlType{
        BMAP_NAVIGATION_CONTROL_LARGE,
        BMAP_NAVIGATION_CONTROL_SMALL,
        BMAP_NAVIGATION_CONTROL_PAN,
        BMAP_NAVIGATION_CONTROL_ZOOM
    }
    export class ScaleControl{
        constructor(opt?:ScaleControlOptions);
        getUnit():LengthUnit;
        setUnit(unit:LengthUnit):void;
    }
    export class Copyright{
        id:number;
        content:string;
        bounds:Bounds;
    }
    export enum MapTypeControlType{
        BMAP_MAPTYPE_CONTROL_HORIZONTAL,
        BMAP_MAPTYPE_CONTROL_DROPDOWN,
        BMAP_MAPTYPE_CONTROL_MAP
    }
    export class GeolocationControl{
        constructor(type?:GeolocationControlOptions);
        location():void;
        getAddressComponent():AddressComponent;
    }
    export interface GeolocationControlOptions{
        anchor?:ControlAnchor;
        offset?:Size;
        showAddressBar?:boolean;
        enableAutoLocation?:boolean;
        locationIcon?:Icon;
    }
    
    export class Overlay {
        initialize(map:Map):HTMLElement;
        isVisible():boolean;
        draw():void;
        show():void;
        hide():void;
    }
    export enum SymbolShapeType{
        BMap_Symbol_SHAPE_CIRCLE,
        BMap_Symbol_SHAPE_RECTANGLE,
        BMap_Symbol_SHAPE_RHOMBUS,
        BMap_Symbol_SHAPE_STAR,
        BMap_Symbol_SHAPE_BACKWARD_CLOSED_ARROW,
        BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW,
        BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW,
        BMap_Symbol_SHAPE_FORWARD_OPEN_ARROW,
        BMap_Symbol_SHAPE_POINT,
        BMap_Symbol_SHAPE_PLANE,
        BMap_Symbol_SHAPE_CAMERA,
        BMap_Symbol_SHAPE_WARNING,
        BMap_Symbol_SHAPE_SMILE,
        BMap_Symbol_SHAPE_CLOCK
    }
    export interface PolylineOptions{
        strokeColor?:string;
        strokeWeight?:number;
        strokeOpacity?:number;
        strokeStyle?:string;
        enableMassClear?:boolean;
        enableEditing?:boolean;
        enableClicking?:boolean;
    }
    export interface GroundOverlayOptions{
        opacity?:number;
        imageURL?:string;
        displayOnMinLevel?:number;
        displayOnMaxLevel?:number;
    }
    export class Marker extends Overlay{
        constructor(point:Point,opts?:MarkerOptions);
        openInfoWindow(infoWnd:InfoWindow):void;
        closeInfoWindow():void;
        setIcon(icon:Icon):void;
        getIcon():Icon;
        setPosition(position:Point);
        getPosition():Point;
        setOffset(offset:Size):void;
        getOffset():Size;
        getLabel():Label;
        setLabel(label:Label):void;
        setTitle(title:string):void;
        getTitle():string;
        setTop(isTop:Boolean):void;
        enableDragging():void;
        disableDragging():void;
        enableMassClear():void;
        disableMassClear():void;
        setZIndex(zIndex:number):void;
        getMap():Map;
        addContextMenu(menu:ContextMenu):void;
        removeContextMenu(menu:ContextMenu):void;
        setAnimation(animation:Animation|any):void;
        setRotation(rotation:number):void;
        getRotation():number;
        setShadow(shadow:Icon):void;
        getShadow():Icon;
        addEventListener(event:string,handler:Function):void;
        removeEventListener(event:string,handler:Function):void;
    }
    export interface SymbolOptions{
        anchor?:Size;
        fillColor?:string;
        fillOpacity?:number;
        scale?:number;
        rotation?:number;
        strokeColor?:string;
        strokeOpacity?:number;
        strokeWeight?:number;
    }
    export class IconSequence{
        constructor(symbol:Symbol,offset:string,repeat:string,fixedRotation:boolean);
    }
    export class PointCollection{
        constructor(points:Array<Point>,opts?:PointCollectionOptions);
        setPoints(points:Array<Point>):void;
        setStyles(styles:PointCollectionOptions):void;
        clear();
    }
    export interface MarkerOptions{
        offset?:Size;
        icon?:Icon;
        enableMassClear?:boolean;
        enableDragging?:boolean;
        enableClicking?:boolean;
        raiseOnDrag?:boolean;
        draggingCursor?:string;
        rotation?:number;
        shadow?:Icon;
        title?:string;
    }
    export class InfoWindow{
        constructor(constent:string|HTMLElement,opts?:InfoWindowOptions);
        setWidth(width:number):void;
        setHeight(height:number):void;
        redraw():void;
        setTitle(title:string|HTMLElement):void;
        getTitle():string|HTMLElement;
        setContent(content:string|HTMLElement):void;
        getContent():string|HTMLElement;
        getPosition():Point;
        enableMaximize():void;
        disableMaximize():void;
        isOpen():boolean;
        setMaxContent(content:string):void;
        maximize():void;
        restore():void;
        enableAutoPan():void;
        disableAutoPan():void;
        enableCloseOnClick():void;
        disableCloseOnClick():void;
        addEventListener(event:string, handler:Function):void;
        removeEventListener(event:string, handler:Function):void;
    }
    export class Polygon extends Overlay{
        constructor(points:Array<Point>,opts?:PolygonOptions);
        setPath(path:Array<Point>):void;
        getPath():Array<Point>;
        setStrokeColor(color:string):void;
        getStrokeColor():string;
        setFillColor(color:string):void;
        getFillColor():string;
        setStrokeOpacity(opacity:number):void;
        getStrokeOpacity():number;
        setFillOpacity(opacity:number):void;
        getFillOpacity():number;
        setStrokeWeight(weight:number):void;
    }
    export interface PointCollectionOptions{
        shape?:ShapeType;
        color?:string;
        size?:SizeType;
    }
    export enum Animation {
        BMAP_ANIMATION_DROP,
        BMAP_ANIMATION_BOUNCE
    }
    export interface InfoWindowOptions{
        width?:number;
        height?:number;
        maxWidth?:number;
        offset?:Size;
        title?:string;
        enableAutoPan?:boolean;
        enableCloseOnClick?:boolean;
        enableMessage?:boolean;
        message?:string;
    }
    export interface PolygonOptions{
        strokeColor?:string;
        fillColor?:string;
        strokeWeight?:number;
        strokeOpacity?:number;
        fillOpacity?:number;
        strokeStyle?:string;
        enableMassClear?:boolean;
        enableEditing?:boolean;
        enableClicking?:boolean;
    }
    export enum ShapeType{
        BMAP_POINT_SHAPE_CIRCLE,
        BMAP_POINT_SHAPE_STAR,
        BMAP_POINT_SHAPE_SQUARE,
        BMAP_POINT_SHAPE_RHOMBUS,
        BMAP_POINT_SHAPE_WATERDROP
    }
    export class Icon{
        constructor(url:string,size:Size,opts?:IconOptions);
        anchor:Size;
        size:Size;
        imageOffset:Size;
        imageSize:Size;
        imageUrl:string;
        infoWindowOffset:Size;
        infoWindowAnchor:Size;
        printImageUrl:string;
        setImageUrl(imageUrl:string):void;
        setSize(size:Size):void;
        setImageSize(offset:Size):void;
        setAnchor(anchor:Size):void;
        setImageOffset(offset:Size):void;
        setInfoWindowAnchor(anchor:Size):void;
        setPrintImageUrl(url: string):void;
    }
    export class Label{
        constructor(content:string,opts?:LabelOptions);
        setStyle(styles:Object):void;
        setContent(content:string):void;
        setPosition(position:Point):void;
        getPosition():Point;
        setOffset(offset:Size):void;
        getOffset():Size;
        setTitle(title:string):void;
        getTitle():string;
        enableMassClear():void;
        disableMassClear():void;
        setZIndex(zIndex: number):void;
        setPosition(position:Point):void;
        getMap():Map;
        addEventListener(event:string, handler:Function):void;
        removeEventListener(event:string, handler:Function):void;
    }
    export class Circle extends Overlay{
        constructor(center:Point,radius:number,opts?:CircleOptions);
        setCenter(center:Point):void;
        getCenter():Point;
        setRadius(radius: number):void;
        getRadius():number;
        getBounds():Bounds;
        setStrokeColor(color:string):void;
        getStrokeColor():string;
        setFillColor(color:string):void;
        getFillColor():string;
        setStrokeOpacity(opacity:number):void;
        getStrokeOpacity():number;
        setFillOpacity(opacity:number):void;
        getFillOpacity():number;
        setStrokeWeight(weight:number):void;
        getStrokeWeight():number;
        setStrokeStyle(style:string):void;
        getStrokeStyle():string;
        enableEditing():void;
        disableEditing():void;
        enableMassClear():void;
        disableMassClear():void;
        getMap():Map;
        addEventListener(event:string, handler:Function):void;
        removeEventListener(event:string, handler:Function):void;
    }
    export enum SizeType{
        BMAP_POINT_SIZE_TINY,
        BMAP_POINT_SIZE_SMALLER,
        BMAP_POINT_SIZE_SMALL,
        BMAP_POINT_SIZE_NORMAL,
        BMAP_POINT_SIZE_BIG,
        BMAP_POINT_SIZE_BIGGER,
        BMAP_POINT_SIZE_HUGE
    }
    export interface IconOptions {
        offset?:Size;
        anchor?:Size;
        imageOffset?:Size;
        infoWindowOffset?:Size;
        infoWindowAnchor?:Size;
        printImageUrl?:string;
    }
    export interface LabelOptions {
        offset?:Size;
        position?:Point;
        enableMassClear?:boolean;
    }
    export interface CircleOptions {
        strokeColor?:string;
        fillColor?:string;
        strokeWeight?:number;
        strokeOpacity?:number;
        fillOpacity?:number;
        strokeStyle?:string;
        enableMassClear?:boolean;
        enableEditing?:boolean;
        enableClicking?:boolean;
    }
    export class Hotspot{
        constructor(position:Point,opts?:HotspotOptions);
        getPosition():Point;
        setPosition(position:Point):void;
        getText():string;
        setText(text:string):void;
        getUserData():any;
        setUserData(data:any):void;
    }
    export class Symbol{
        constructor(path:string|SymbolShapeType,opts?:SymbolOptions);
        setPath(path:any):void;
        setAnchor(anchor:Size):void;
        setRotation(rotation:number):void;
        setScale(scale:number):void;
        setStrokeOpacity(opacity:number):void;
        setFillOpacity(opacity:number):void;
        setFillColor(color:string):void;
    }
    export class Polyline{
        constructor(points:Array<Point>,opts?:PolylineOptions);
        setPath(path:Array<Point>):void;
        getPath():Array<Point>;
        setStrokeColor(color:String):void;
        getStrokeColor():string;
        setStrokeOpacity(opacity:number):void;
        getStrokeOpacity():number;
        setStrokeWeight(weight:number):void;
        getStrokeWeight():number;
        setStrokeStyle(style:string):void;
        getStrokeStyle():string;
        getBounds():Bounds;
        enableEditing():void;
        disableEditing():void;
        enableMassClear():void;
        disableMassClear():void;
        setPositionAt(index:Number, point:Point):void;
        getMap():Map;
        addEventListener(event:string, handler:Function):void;
        removeEventListener(event:string, handler:Function):void;
    }
    export class GroundOverlay extends Overlay{
        constructor(bounds:Bounds,opts?:GroundOverlayOptions);
        setBounds(bounds:Bounds):void;
        getBounds():Bounds;
        setOpacity(opcity: number):void;
        getOpacity():number;
        setImageURL(url:string):void;
        getImageURL():string;
        setDisplayOnMinLevel(level:number):void;
        getDisplayOnMinLevel():number;
        setDispalyOnMaxLevel(level:number):void;
        getDispalyOnMaxLevel():number;
    }
    export interface HotspotOptions{
        text?:string;
        offsets?:Array<any>;
        userData?:any;
        minZoom?:number;
        maxZoom?:number;
    }
    export class MapPanes{
        floatPane:HTMLElement;
        markerMouseTarget:HTMLElement;
        floatShadow:HTMLElement;
        labelPane:HTMLElement;
        markerPane:HTMLElement;
        markerShadow:HTMLElement;
        mapPane:HTMLElement;
    }
    
    
    export class PushpinTool{
        constructor(map:Map,opts?:PushpinToolOptions);
        open():boolean;
        close():void;
        setIcon(icon:Icon):Icon;
        getIcon():Icon;
        setCursor(cursor:string):string;
        getCursor():string;
        toString():string;
    }
    export interface PushpinToolOptions {
        icon?:Icon;
        cursor?:string;
        followText?:string;
    }
    export class DistanceTool{
        constructor(map:Map);
        open():boolean;
        close():void;
        toString():string;
    }
    export class DragAndZoomTool {
        constructor(map:Map,opts?:DragAndZoomToolOptions);
        open():boolean;
        close():void;
        toString():string;
    }
    export interface DragAndZoomToolOptions {
        zoomType?:ZoomType;
        autoClose?:boolean;
        followText?:string;
    }
    export enum ZoomType {
        BMAP_ZOOM_IN,
        BMAP_ZOOM_OUT
    }
    
    
    export class ContextMenu{
        constructor();
        addItem(item:MenuItem):void;
        getItem(index:Number):MenuItem;
        removeItem(item:MenuItem):void;
        addSeparator():void;
        removeSeparator(index:number);
    }
    export class MenuItem{
        constructor(text:string,callback:Function,opts?:MenuItemOptions);
        setText(text:string):void;
        setIcon(iconUrl:string):void;
        enable():void;
        disable():void;
    }
    export interface MenuItemOptions {
        width?:number;
        id?:string;
        iconUrl?:string|ContextMenuIcon
    }
    export enum ContextMenuIcon {
        BMAP_CONTEXT_MENU_ICON_ZOOMIN,
        BMAP_CONTEXT_MENU_ICON_ZOOMOUT
    }
    export class MapType{
        static BMAP_NORMAL_MAP: number;
        static BMAP_PERSPECTIVE_MAP: number;
        static BMAP_SATELLITE_MAP:number;
        static BMAP_HYBRID_MAP:number;
        getName():string;
        getTileLayer():TileLayer;
        getMinZoom():number;
        getMaxZoom():number;
        getProjection():Projection;
        getTextColor():string;
        getTips():string;
    }
    export interface MapTypeOptions {
        minZoom?:number;
        maxZoom?:number;
        errorImageUrl?:string;
        textColor?:number;
        tips?:string;
    }
    export class Projection{
        lngLatToPoint(lngLat:Point):Pixel;
        pointToLngLat(point:Pixel):Point;
    }
    export class MercatorProjection extends Projection{
    }
    export class PerspectiveProjection extends Projection{
    }
    
    
    export class TileLayer{
        constructor(opts?:TileLayerOptions);
        getTilesUrl(tileCoord:Pixel,zoom:number):string;
        getCopyright():Copyright|any;
        isTransparentPng():number;
    }
    export interface TileLayerOptions {
        transparentpng?:boolean;
        tileUrlTemplate?:string;
        copyright?:Copyright;
        zIndex?:number;
    }
    export class TrafficLayer {
        constructor(opts?:TrafficLayerOptions);
    }
    export interface TrafficLayerOptions {
        predictDate?:PredictDate;
    }
    export class PredictDate {
        weekday:number;
        hour:number;
    }
    export class CustomLayer{
        constructor(opts:CustomLayerOptions);
    }
    export class Custompoi{
        poiId:string;
        databoxId:string;
        title:string;
        address:string;
        phoneNumber:string;
        postcode:string;
        provinceCode:number;
        province:string;
        cityCode:number;
        city:string;
        districtCode:number;
        district:string;
        point:Point;
        tags:Array<string>
        typeId:number;
        extendedData:any;
    }
    export class PanoramaCoverageLayer{
        constructor();
    }
    export interface CustomLayerOptions {
        databoxId?:string;
        geotableId?:string;
        q?:string;
        tags?:string;
        filter?:string;
        pointDensityType?:PointDensityType;
    }
    export enum PointDensityType{
        BMAP_POINT_DENSITY_HIGH,
        BMAP_POINT_DENSITY_MEDIUM,
        BMAP_POINT_DENSITY_LOW
    }
    
    export class LocalSearch {
        constructor(location: Map | Point | string, opts?: LocalSearchOptions);
        search(keyword: string | Array<string>, option: Object);
        searchInBounds(keyword: string | Array<string>, bounds: Bounds,option?: Object):void;
        searchNearby(keyword: string | Array<string>, center: LocalResultPoi | string | Point, radius: number,option?: Object):void;	
        getResults(): LocalResult | Array<LocalResult>;
        clearResults(): void;
        gotoPage(page: number): void;
        enableAutoViewport(): void;
        disableAutoViewport(): void;
        enableFirstResultSelection(): void;	
        disableFirstResultSelection(): void;
        setLocation(location: Map | Point | string): void;
        setPageCapacity(num: number): void;
        getPageCapacity(): number;
        setSearchCompleteCallback(results: LocalResult|Array<LocalResult>): void;
        setMarkersSetCallback(callback: Function): void;
        setInfoHtmlSetCallback(callback: Function): void;
        setResultsHtmlSetCallback(callback: Function): void;
        getStatus(): StatusCode;
    }

    export enum LineType {
        BMAP_LINE_TYPE_BUS,
        BMAP_LINE_TYPE_SUBWAY,
        BMAP_LINE_TYPE_FERRY
    }

    export class WalkingRouteResult {
        city: string;
        getStart(): LocalResultPoi;	
        getEnd(): LocalResultPoi;	
        getNumPlans(): number;	
        getPlan(i: number): RoutePlan;
    }

    export class BusLineSearch {
        constructor(location: Map | Point | string, options?: BusLineSearchOptions);
        getBusList(keyword: string): void;	
        getBusLine(busLstItem: BusListItem): void;	
        clearResults(): void;	
        enableAutoViewport(): void;	
        disableAutoViewport(): void;	
        setLocation(location: Map | Point | string): void;	
        getStatus(): StatusCode;	
        toString(): string;	
        setGetBusListCompleteCallback(callback: Function): void;	
        setGetBusLineCompleteCallback(callback: Function): void;	
        setBusListHtmlSetCallback(callback: Function): void;	
        setBusLineHtmlSetCallback(callback: Function): void;	
        setPolylinesSetCallback(callback: Function): void;	
        setMarkersSetCallback(callback: Function): void;	
    }

    export interface LocalSearchOptions {
        renderOptions?: RenderOptions;
        onMarkersSet?: Function;	
        onInfoHtmlSet?: Function;	
        onResultsHtmlSet?: Function;	
        pageCapacity?: number;	
        onSearchComplete?: Function;

    }

    export class DrivingRoute {
        constructor(location: Map | Point | string, opts?: DrivingRouteOptions);
        search(start: string | Point | LocalResultPoi, end: string | Point | LocalResultPoi, options?: Object): void;
        getResults(): DrivingRouteResult;
        clearResults(): void;
        enableAutoViewport(): void;
        disableAutoViewport(): void;	
        setLocation(location: Map | Point | string): void;
        setPolicy(policy: DrivingPolicy): void;	
        setSearchCompleteCallback(callback: Function): void;	
        setMarkersSetCallback(callback: Function): void;	
        setInfoHtmlSetCallback(callback: Function): void;	
        setPolylinesSetCallback(callback: Function): void;	
        setResultsHtmlSetCallback(callback: Function): void;	
        getStatus(): StatusCode;	
        toString(): string;

    }

    export class Geocoder {
        constructor();
        getPoint(address: string, callback: Function, city: string): void;
        getLocation(point: Point, callback:Function, options?: LocationOptions): void;
    }

    export interface BusLineSearchOptions {
        renderOptions?: RenderOptions;	
        onGetBusListComplete?: Function;
        onGetBusLineComplete?: Function;
        onBusListHtmlSet?: Function;
        onBusLineHtmlSet?: Function;
        onPolylinesSet?: Function;
        onMarkersSet?: Function;
    }

    export class CustomData {
        geotableId: number;
        tags: string;
        filter: string;
    }

    export interface DrivingRouteOptions {
        renderOptions?: RenderOptions;	
        policy?: DrivingPolicy;
        onSearchComplete?: Function;
        onMarkersSet?: Function;
        onInfoHtmlSet?: Function;
        onPolylinesSet?: Function;	
        onResultsHtmlSet?: Function;
    }

    export class GeocoderResult {
        point: Point;
        address: string;
        addressComponents: AddressComponent;
        surroundingPois: Array<LocalResultPoi>;
        business: string;
    }

    export class BusListResult {
        keyword: string;	
        city: string;	
        moreResultsUrl: string;
        getNumBusList(): number;	
        getBusListItem(i: number): BusListItem;
    }

    export interface RenderOptions {
        map?: Map;	
        panel?: string | HTMLElement;	
        selectFirstResult?: boolean;
        autoViewport?: boolean;
        highlightMode?: HighlightModes;
    }

    export enum DrivingPolicy {
        BMAP_DRIVING_POLICY_LEAST_TIME,
        BMAP_DRIVING_POLICY_LEAST_DISTANCE,
        BMAP_DRIVING_POLICY_AVOID_HIGHWAYS
    }

    export class AddressComponent {
        streetNumber: string;	
        street: string;
        district: string;
        city: string;
        province: string;
    }

    export class BusLine {
        name: string;
        startTime: string;
        endTime: string;
        company: string;
        getNumBusStations(): number;
        getBusStation(i: number): BusStation;
        getPath(): Array<Point>;
        getPolyline(): Polyline;
    }

    export class LocalResult {
        keyword: string;
        center: LocalResultPoi;
        radius: number;
        bounds: Bounds;
        city: string;
        moreResultsUrl: string;
        province: string;
        suggestions: Array<string>;
        getPoi(i: number): LocalResultPoi;
        getCurrentNumPois(): number;	
        getNumPois(): number;
        getNumPages(): number;
        getPageIndex(): number;
        getCityList(): Array<Object>;
    }

    export class DrivingRouteResult {
        policy: DrivingPolicy;	
        city: string;
        moreResultsUrl: string;
        taxiFar: TaxiFare;
        getStart(): LocalResultPoi;	
        getEnd(): LocalResultPoi;
        getNumPlans(): number;
        getPlan(i: number): RoutePlan;
    }

    export interface LocationOptions {
        poiRadius?: number;	
        numPois?: number;
    }

    export class BusListItem {
        name: string;
    }

    export class LocalResultPoi {
        title: string;
        point: Point;	
        url: string;
        address: string;
        city: string;
        phoneNumber: string;
        postcode: string;
        type: PoiType;
        isAccurate: boolean;
        province: string;
        tags: Array<string>;
        detailUrl: string;
    }

    export class TaxiFare {
        day: TaxiFareDetail;
        night: TaxiFareDetail;
        distance: number;
        remark: string;
    }

    export class LocalCity {
        constructor(opts?: LocalCityOptions);
        get(callback: Function): void;
    }

    export class BusStation {
        name: string;
        position: Point;
    }

    export enum PoiType {
        BMAP_POI_TYPE_NORMAL,
        BMAP_POI_TYPE_BUSSTOP,
        BMAP_POI_TYPE_SUBSTOP
    }

    export class TaxiFareDetail {
        initialFare: number;
        unitFare: number;
        totalFare: number;
    }

    export interface LocalCityOptions {
        renderOptions?: RenderOptions;
    }

    export class Autocomplete {
        constructor(options?: AutocompleteOptions);
        show(): void;
        hide(): void;
        setTypes(types: Array<string>): void;
        setLocation(location: string | Map | Point): void;
        search(keywords: string): void;
        getResults(): AutocompleteResult;
        setInputValue(keyword: string): void;
        dispose(): void;
    }

    export class TransitRoute {
        constructor(location:Map|Point|string, opts?:TransitRouteOptions);
        search(start: string | Point | LocalResultPoi, end: string | Point | LocalResultPoi): void;
        getResults(): TransitRouteResult;
        clearResults(): void;
        enableAutoViewport(): void;
        disableAutoViewport(): void;
        setPageCapacity(capacity: number): void;
        setLocation(location: Map | Point | string): void;
        setPolicy(policy: TransitPolicy): void;
        setSearchCompleteCallback(callback: Function): void;
        setMarkersSetCallback(callback: Function): void;
        setInfoHtmlSetCallback(callback: Function): void;
        setPolylinesSetCallback(callback: Function): void;
        setResultsHtmlSetCallback(callback: Function): void;
        getStatus(): StatusCode;
        toString():string;
    }

    export class RoutePlan {
        getNumRoutes(): number;
        getRoute(i: number): Route;
        getDistance(format?:boolean): string | number;
        getDuration(format?:boolean): string | number;
        getDragPois(): Array<LocalResultPoi>;
    }


    export class LocalCityResult {
        center: Point;
        level: number;
        name: string;
    }

    export interface AutocompleteOptions {
        location?: string | Map | Point;
        types?: Array<string>;
        onSearchComplete?: Function;
        input?: string | HTMLElement;
    }

    export interface TransitRouteOptions {
        renderOptions?: RenderOptions;
        policy?: TransitPolicy;
        pageCapacity?: number;
        onSearchComplete?: Function;
        onMarkersSet?: Function;
        onInfoHtmlSet?: Function;
        onPolylinesSet?: Function;
        onResultsHtmlSet?: Function;
    }

    export class Route {
        getNumSteps(): number;
        getStep(i: number): Step;
        getDistance(format: boolean): string | number;
        getIndex(): number;
        getPolyline(): Polyline;
        getPoints(): Array<Point>;
        getPath(): Array<Point>;
        getRouteType(): RouteType;
    }

    export class TrafficControl {
        constructor();
        setPanelOffset(offset: Size): void;
        show(): void;
        hide(): void;
    }

    export class AutocompleteResultPoi {
        province: string;
        City: string;
        district: string;
        street: string;
        streetNumber: string;
        business: string;
    }

    export enum TransitPolicy {
        BMAP_TRANSIT_POLICY_LEAST_TIME,
        BMAP_TRANSIT_POLICY_LEAST_TRANSFER,
        BMAP_TRANSIT_POLICY_LEAST_WALKING,
        BMAP_TRANSIT_POLICY_AVOID_SUBWAYS
    }

    export enum RouteType {
        BMAP_ROUTE_TYPE_DRIVING,
        BMAP_ROUTE_TYPE_WALKING
    }

    export class Geolocation {
        constructor();
        getCurrentPosition(callback:Function, options?: PositionOptions): void;
        getStatus(): StatusCode;
    }

    export class AutocompleteResult {
        keyword: string;
        getPoi(i: number): AutocompleteResultPoi;
        getNumPois: number;
    }

    export class TransitRouteResult {
        policy: TransitPolicy;
        city: string;
        moreResultsUrl: string;
        getStart(): LocalResultPoi;
        getEnd(): LocalResultPoi;
        getNumPlans(): number;
        getPlan(i: number): TransitRoutePlan;
    }

    export class Step {
        getPoint(): Point;
        getPosition(): Point;
        getIndex(): number;
        getDescription(includeHtml: boolean): string;
        getDistance(format: boolean): string | number;
    }

    export class GeolocationResult {
        point: Point;
        accuracy: number;
    }

    export class Boundary {
        constructor();
        get(name: string, callback: Function): any;
    }

    export class TransitRoutePlan {
        getNumLines(): number;
        getLine(i: number): Line;
        getNumRoutes(): number;
        getRoute(i: number): Route;
        getDistance(format: boolean): string | number;
        getDuration(format: boolean): string | number;
        getDescription(includeHtml: boolean): string;
    }

    export class WalkingRoute {
        constructor(location: Map | Point | string, opts?: WalkingRouteOptions);
        search(start: string | Point | LocalResultPoi, end: string | Point | LocalResultPoi): void;
        getResults(): WalkingRouteResult;
        clearResults(): void;
        enableAutoViewport(): void;
        disableAutoViewport(): void;
        setLocation(location: Map | Point | string): void;
        setSearchCompleteCallback(callback: Function): void;
        setMarkersSetCallback(callback: Function): void;
        setInfoHtmlSetCallback(callback: Function): void;
        setPolylinesSetCallback(callback: Function): void;
        setResultsHtmlSetCallback(callback: Function): void;
        getStatus(): StatusCode;
        toString(): string;
    }

    export interface PositionOptions {
        enableHighAccuracy?: boolean;
        timeout?: number;
        maximumAge?: number;
    }

    export class Line {
        title: string;
        type: LineType;
        getNumViaStops(): number;
        getGetOnStop(): LocalResultPoi;
        getGetOffStop(): LocalResultPoi;
        getPath(): Array<Point>;
        getPolyline(): Polyline;
        getDistance(format?:boolean): string | number;
    }

    export interface WalkingRouteOptions {
        renderOptions?: RenderOptions;
        onSearchComplete?: Function;
        onMarkersSet?: Function;
        onPolylinesSet?: Function;
        onInfoHtmlSet?: Function;
        onResultsHtmlSet?: Function;
    }

    export enum HighlightModes {
        BMAP_HIGHLIGHT_STEP,
        BMAP_HIGHLIGHT_ROUTE
    }

    export enum StatusCode {
        BMAP_STATUS_SUCCESS,
        BMAP_STATUS_CITY_LIST,
        BMAP_STATUS_UNKNOWN_LOCATION,
        BMAP_STATUS_UNKNOWN_ROUTE,
        BMAP_STATUS_INVALID_KEY,
        BMAP_STATUS_INVALID_REQUEST,
        BMAP_STATUS_PERMISSION_DENIED,
        BMAP_STATUS_SERVICE_UNAVAILABLE,
        BMAP_STATUS_TIMEOUT
    }
    
    export class Panorama {
	    constructor(container: string | HTMLElement, opts?: PanoramaOptions);
        getLinks: Array<PanoramaLink>;
        getId(): string;
        getPosition():Point;
        getPov(): PanoramaPov;
        getZoom(): number;
        setId(id: string): void;
        setPosition(position:Point): void;
        setPov(pov: PanoramaPov): void;
        setZoom(zoom: number);
        enableScrollWheelZoom(): void;
        disableScrollWheelZoom(): void;
        show(): void;
        hide(): void;
    }
    export interface PanoramaOptions {
        navigationControl?: boolean;
        linksControl?: boolean;
        indoorSceneSwitchControl?: boolean;
        albumsControl?: boolean;
        albumsControlOptions?: AlbumsControlOptions;
    }
    export class PanoramaLink {
        description: string;
        heading: number;
        id: string;
    }
    export class PanoramaPov {
        heading: number;
        pitch: number;
    }
    export class PanoramaService {
        constructor();
        getPanoramaById(id: string, callback:{(data: PanoramaData): void;}):void;
        getPanoramaByLocation(point: Point,radius: number, callback:{(data: PanoramaData):void;}):void;	
    }
    export class PanoramaData {
        id: string;
        description: string;
        links: Array<PanoramaLink>;
        position: Point;
        tiles: PanoramaTileData;
    }
    export class PanoramaTileData {
        centerHeading: number;
        tileSize: Size;
        world: Size;
    }
    export class PanoramaLabel {
        constructor(content:string,opts?:PanoramaLabelOptions);
        setPosition(position:Point): void;
        getPosition(): Point;
        getPov(): PanoramaPov;
        setContent(content: string): void;
        getContent(): string;
        show(): void;
        hide(): void;
        setAltitude(altitube: number): void;
        getAltitube(): number;
        addEventListener(): void;
        removeEventListener():void;
    }
    export interface PanoramaLabelOptions {
        position?: Point;
        altitube?: number;
    }
    export interface AlbumsControlOptions {
        anchor?: ControlAnchor;
        offset?: Size;
        maxWidth?: number | string;
        imageHeight?: number;
    }
    export enum PanoramaSceneType {
        BMAP_PANORAMA_INDOOR_SCENE,
        BMAP_PANORAMA_STREET_SCENE
    }

    export enum PanoramaPOIType {
        BMAP_PANORAMA_POI_HOTEL,
        BMAP_PANORAMA_POI_CATERING,
        BMAP_PANORAMA_POI_MOVIE,
        BMAP_PANORAMA_POI_TRANSIT,
        BMAP_PANORAMA_POI_INDOOR_SCENE,
        BMAP_PANORAMA_POI_NONE
    }
}
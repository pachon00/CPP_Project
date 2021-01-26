import * as tslib_1 from "tslib";
import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { GoogleMapsAPIWrapper } from './../google-maps-api-wrapper';
/**
 * Manages all Data Layers for a Google Map instance.
 */
let DataLayerManager = class DataLayerManager {
    constructor(_wrapper, _zone) {
        this._wrapper = _wrapper;
        this._zone = _zone;
        this._layers = new Map();
    }
    /**
     * Adds a new Data Layer to the map.
     */
    addDataLayer(layer) {
        const newLayer = this._wrapper.createDataLayer({
            style: layer.style,
        })
            .then(d => {
            if (layer.geoJson) {
                this.getDataFeatures(d, layer.geoJson).then(features => d.features = features);
            }
            return d;
        });
        this._layers.set(layer, newLayer);
    }
    deleteDataLayer(layer) {
        this._layers.get(layer).then(l => {
            l.setMap(null);
            this._layers.delete(layer);
        });
    }
    updateGeoJson(layer, geoJson) {
        this._layers.get(layer).then(l => {
            l.forEach(function (feature) {
                l.remove(feature);
                var index = l.features.indexOf(feature, 0);
                if (index > -1) {
                    l.features.splice(index, 1);
                }
            });
            this.getDataFeatures(l, geoJson).then(features => l.features = features);
        });
    }
    setDataOptions(layer, options) {
        this._layers.get(layer).then(l => {
            l.setControlPosition(options.controlPosition);
            l.setControls(options.controls);
            l.setDrawingMode(options.drawingMode);
            l.setStyle(options.style);
        });
    }
    /**
     * Creates a Google Maps event listener for the given DataLayer as an Observable
     */
    createEventObservable(eventName, layer) {
        return new Observable((observer) => {
            this._layers.get(layer).then((d) => {
                d.addListener(eventName, (e) => this._zone.run(() => observer.next(e)));
            });
        });
    }
    /**
     * Extract features from a geoJson using google.maps Data Class
     * @param d : google.maps.Data class instance
     * @param geoJson : url or geojson object
     */
    getDataFeatures(d, geoJson) {
        return new Promise((resolve, reject) => {
            if (typeof geoJson === 'object') {
                try {
                    const features = d.addGeoJson(geoJson);
                    resolve(features);
                }
                catch (e) {
                    reject(e);
                }
            }
            else if (typeof geoJson === 'string') {
                d.loadGeoJson(geoJson, null, resolve);
            }
            else {
                reject(`Impossible to extract features from geoJson: wrong argument type`);
            }
        });
    }
};
DataLayerManager.ctorParameters = () => [
    { type: GoogleMapsAPIWrapper },
    { type: NgZone }
];
DataLayerManager = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [GoogleMapsAPIWrapper, NgZone])
], DataLayerManager);
export { DataLayerManager };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1sYXllci1tYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnbS9jb3JlLyIsInNvdXJjZXMiOlsic2VydmljZXMvbWFuYWdlcnMvZGF0YS1sYXllci1tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFZLE1BQU0sTUFBTSxDQUFDO0FBRzVDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBR3BFOztHQUVHO0FBRUgsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7SUFJM0IsWUFBb0IsUUFBOEIsRUFBVSxLQUFhO1FBQXJELGFBQVEsR0FBUixRQUFRLENBQXNCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUhqRSxZQUFPLEdBQ2YsSUFBSSxHQUFHLEVBQStCLENBQUM7SUFFc0MsQ0FBQztJQUU5RTs7T0FFRztJQUNILFlBQVksQ0FBQyxLQUFtQjtRQUM5QixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQztZQUM3QyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7U0FDSixDQUFDO2FBQ2hCLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNSLElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRTtnQkFDakIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLENBQUM7YUFDaEY7WUFDRCxPQUFPLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxl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LFFBQVEsRUFBRTtnQkFDdEMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQ3ZDO2lCQUFNO2dCQUNMLE1BQU0sQ0FBQyxrRUFBa0UsQ0FBQyxDQUFDO2FBQzVFO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0YsQ0FBQTs7WUFqRitCLG9CQUFvQjtZQUFpQixNQUFNOztBQUo5RCxnQkFBZ0I7SUFENUIsVUFBVSxFQUFFOzZDQUttQixvQkFBb0IsRUFBaUIsTUFBTTtHQUo5RCxnQkFBZ0IsQ0FxRjVCO1NBckZZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQWdtRGF0YUxheWVyIH0gZnJvbSAnLi8uLi8uLi9kaXJlY3RpdmVzL2RhdGEtbGF5ZXInO1xuaW1wb3J0IHsgR29vZ2xlTWFwc0FQSVdyYXBwZXIgfSBmcm9tICcuLy4uL2dvb2dsZS1tYXBzLWFwaS13cmFwcGVyJztcbmltcG9ydCB7IERhdGEsIERhdGFPcHRpb25zLCBGZWF0dXJlIH0gZnJvbSAnLi8uLi9nb29nbGUtbWFwcy10eXBlcyc7XG5cbi8qKlxuICogTWFuYWdlcyBhbGwgRGF0YSBMYXllcnMgZm9yIGEgR29vZ2xlIE1hcCBpbnN0YW5jZS5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhdGFMYXllck1hbmFnZXIge1xuICBwcml2YXRlIF9sYXllcnM6IE1hcDxBZ21EYXRhTGF5ZXIsIFByb21pc2U8RGF0YT4+ID1cbiAgbmV3IE1hcDxBZ21EYXRhTGF5ZXIsIFByb21pc2U8RGF0YT4+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfd3JhcHBlcjogR29vZ2xlTWFwc0FQSVdyYXBwZXIsIHByaXZhdGUgX3pvbmU6IE5nWm9uZSkgeyB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBuZXcgRGF0YSBMYXllciB0byB0aGUgbWFwLlxuICAgKi9cbiAgYWRkRGF0YUxheWVyKGxheWVyOiBBZ21EYXRhTGF5ZXIpIHtcbiAgICBjb25zdCBuZXdMYXllciA9IHRoaXMuX3dyYXBwZXIuY3JlYXRlRGF0YUxheWVyKHtcbiAgICAgIHN0eWxlOiBsYXllci5zdHlsZSxcbiAgICB9IGFzIERhdGFPcHRpb25zKVxuICAgIC50aGVuKGQgPT4ge1xuICAgICAgaWYgKGxheWVyLmdlb0pzb24pIHtcbiAgICAgICAgdGhpcy5nZXREYXRhRmVhdHVyZXMoZCwgbGF5ZXIuZ2VvSnNvbikudGhlbihmZWF0dXJlcyA9PiBkLmZlYXR1cmVzID0gZmVhdHVyZXMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGQ7XG4gICAgfSk7XG4gICAgdGhpcy5fbGF5ZXJzLnNldChsYXllciwgbmV3TGF5ZXIpO1xuICB9XG5cbiAgZGVsZXRlRGF0YUxheWVyKGxheWVyOiBBZ21EYXRhTGF5ZXIpIHtcbiAgICB0aGlzLl9sYXllcnMuZ2V0KGxheWVyKS50aGVuKGwgPT4ge1xuICAgICAgbC5zZXRNYXAobnVsbCk7XG4gICAgICB0aGlzLl9sYXllcnMuZGVsZXRlKGxheWVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUdlb0pzb24obGF5ZXI6IEFnbURhdGFMYXllciwgZ2VvSnNvbjogT2JqZWN0IHwgc3RyaW5nKSB7XG4gICAgdGhpcy5fbGF5ZXJzLmdldChsYXllcikudGhlbihsID0+IHtcbiAgICAgIGwuZm9yRWFjaChmdW5jdGlvbiAoZmVhdHVyZTogRmVhdHVyZSkge1xuICAgICAgICBsLnJlbW92ZShmZWF0dXJlKTtcblxuICAgICAgICB2YXIgaW5kZXggPSBsLmZlYXR1cmVzLmluZGV4T2YoZmVhdHVyZSwgMCk7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgbC5mZWF0dXJlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZ2V0RGF0YUZlYXR1cmVzKGwsIGdlb0pzb24pLnRoZW4oZmVhdHVyZXMgPT4gbC5mZWF0dXJlcyA9IGZlYXR1cmVzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldERhdGFPcHRpb25zKGxheWVyOiBBZ21EYXRhTGF5ZXIsIG9wdGlvbnM6IERhdGFPcHRpb25zKVxuICB7XG4gICAgdGhpcy5fbGF5ZXJzLmdldChsYXllcikudGhlbihsID0+IHtcbiAgICAgIGwuc2V0Q29udHJvbFBvc2l0aW9uKG9wdGlvbnMuY29udHJvbFBvc2l0aW9uKTtcbiAgICAgIGwuc2V0Q29udHJvbHMob3B0aW9ucy5jb250cm9scyk7XG4gICAgICBsLnNldERyYXdpbmdNb2RlKG9wdGlvbnMuZHJhd2luZ01vZGUpO1xuICAgICAgbC5zZXRTdHlsZShvcHRpb25zLnN0eWxlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgR29vZ2xlIE1hcHMgZXZlbnQgbGlzdGVuZXIgZm9yIHRoZSBnaXZlbiBEYXRhTGF5ZXIgYXMgYW4gT2JzZXJ2YWJsZVxuICAgKi9cbiAgY3JlYXRlRXZlbnRPYnNlcnZhYmxlPFQ+KGV2ZW50TmFtZTogc3RyaW5nLCBsYXllcjogQWdtRGF0YUxheWVyKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogT2JzZXJ2ZXI8VD4pID0+IHtcbiAgICAgIHRoaXMuX2xheWVycy5nZXQobGF5ZXIpLnRoZW4oKGQ6IERhdGEpID0+IHtcbiAgICAgICAgZC5hZGRMaXN0ZW5lcihldmVudE5hbWUsIChlOiBUKSA9PiB0aGlzLl96b25lLnJ1bigoKSA9PiBvYnNlcnZlci5uZXh0KGUpKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHRyYWN0IGZlYXR1cmVzIGZyb20gYSBnZW9Kc29uIHVzaW5nIGdvb2dsZS5tYXBzIERhdGEgQ2xhc3NcbiAgICogQHBhcmFtIGQgOiBnb29nbGUubWFwcy5EYXRhIGNsYXNzIGluc3RhbmNlXG4gICAqIEBwYXJhbSBnZW9Kc29uIDogdXJsIG9yIGdlb2pzb24gb2JqZWN0XG4gICAqL1xuICBnZXREYXRhRmVhdHVyZXMoZDogRGF0YSwgZ2VvSnNvbjogT2JqZWN0IHwgc3RyaW5nKTogUHJvbWlzZTxGZWF0dXJlW10+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8RmVhdHVyZVtdPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgZ2VvSnNvbiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZmVhdHVyZXMgPSBkLmFkZEdlb0pzb24oZ2VvSnNvbik7XG4gICAgICAgICAgICByZXNvbHZlKGZlYXR1cmVzKTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBnZW9Kc29uID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGQubG9hZEdlb0pzb24oZ2VvSnNvbiwgbnVsbCwgcmVzb2x2ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVqZWN0KGBJbXBvc3NpYmxlIHRvIGV4dHJhY3QgZmVhdHVyZXMgZnJvbSBnZW9Kc29uOiB3cm9uZyBhcmd1bWVudCB0eXBlYCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG59XG4iXX0=
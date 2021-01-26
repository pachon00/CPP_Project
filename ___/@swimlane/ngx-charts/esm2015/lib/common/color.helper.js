import { range } from 'd3-array';
import { scaleBand, scaleLinear, scaleOrdinal, scaleQuantile } from 'd3-scale';
import { colorSets } from '../utils/color-sets';
export class ColorHelper {
    constructor(scheme, type, domain, customColors) {
        if (typeof scheme === 'string') {
            scheme = colorSets.find(cs => {
                return cs.name === scheme;
            });
        }
        this.colorDomain = scheme.domain;
        this.scaleType = type;
        this.domain = domain;
        this.customColors = customColors;
        this.scale = this.generateColorScheme(scheme, type, this.domain);
    }
    generateColorScheme(scheme, type, domain) {
        if (typeof scheme === 'string') {
            scheme = colorSets.find(cs => {
                return cs.name === scheme;
            });
        }
        let colorScale;
        if (type === 'quantile') {
            colorScale = scaleQuantile()
                .range(scheme.domain)
                .domain(domain);
        }
        else if (type === 'ordinal') {
            colorScale = scaleOrdinal()
                .range(scheme.domain)
                .domain(domain);
        }
        else if (type === 'linear') {
            // linear schemes must have at least 2 colors
            const colorDomain = [...scheme.domain];
            if (colorDomain.length === 1) {
                colorDomain.push(colorDomain[0]);
                this.colorDomain = colorDomain;
            }
            const points = range(0, 1, 1.0 / colorDomain.length);
            colorScale = scaleLinear()
                .domain(points)
                .range(colorDomain);
        }
        return colorScale;
    }
    getColor(value) {
        if (value === undefined || value === null) {
            throw new Error('Value can not be null');
        }
        if (this.scaleType === 'linear') {
            const valueScale = scaleLinear()
                .domain(this.domain)
                .range([0, 1]);
            return this.scale(valueScale(value));
        }
        else {
            if (typeof this.customColors === 'function') {
                return this.customColors(value);
            }
            const formattedValue = value.toString();
            let found; // todo type customColors
            if (this.customColors && this.customColors.length > 0) {
                found = this.customColors.find(mapping => {
                    return mapping.name.toLowerCase() === formattedValue.toLowerCase();
                });
            }
            if (found) {
                return found.value;
            }
            else {
                return this.scale(value);
            }
        }
    }
    getLinearGradientStops(value, start) {
        if (start === undefined) {
            start = this.domain[0];
        }
        const valueScale = scaleLinear()
            .domain(this.domain)
            .range([0, 1]);
        const colorValueScale = scaleBand()
            .domain(this.colorDomain)
            .range([0, 1]);
        const endColor = this.getColor(value);
        // generate the stops
        const startVal = valueScale(start);
        const startColor = this.getColor(start);
        const endVal = valueScale(value);
        let i = 1;
        let currentVal = startVal;
        const stops = [];
        stops.push({
            color: startColor,
            offset: startVal,
            originalOffset: startVal,
            opacity: 1
        });
        while (currentVal < endVal && i < this.colorDomain.length) {
            const color = this.colorDomain[i];
            const offset = colorValueScale(color);
            if (offset <= startVal) {
                i++;
                continue;
            }
            if (offset.toFixed(4) >= (endVal - colorValueScale.bandwidth()).toFixed(4)) {
                break;
            }
            stops.push({
                color,
                offset,
                opacity: 1
            });
            currentVal = offset;
            i++;
        }
        if (stops[stops.length - 1].offset < 100) {
            stops.push({
                color: endColor,
                offset: endVal,
                opacity: 1
            });
        }
        if (endVal === startVal) {
            stops[0].offset = 0;
            stops[1].offset = 100;
        }
        else {
            // normalize the offsets into percentages
            if (stops[stops.length - 1].offset !== 100) {
                for (const s of stops) {
                    s.offset = ((s.offset - startVal) / (endVal - startVal)) * 100;
                }
            }
        }
        return stops;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3IuaGVscGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN3aW1sYW5lL25neC1jaGFydHMvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2NvbG9yLmhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFL0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRWhELE1BQU0sT0FBTyxXQUFXO0lBT3RCLFlBQVksTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsWUFBYTtRQUM3QyxJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsRUFBRTtZQUM5QixNQUFNLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFDM0IsT0FBTyxFQUFFLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQztZQUM1QixDQUFDLENBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBRWpDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRCxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU07UUFDdEMsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDOUIsTUFBTSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFD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QztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmFuZ2UgfSBmcm9tICdkMy1hcnJheSc7XG5pbXBvcnQgeyBzY2FsZUJhbmQsIHNjYWxlTGluZWFyLCBzY2FsZU9yZGluYWwsIHNjYWxlUXVhbnRpbGUgfSBmcm9tICdkMy1zY2FsZSc7XG5cbmltcG9ydCB7IGNvbG9yU2V0cyB9IGZyb20gJy4uL3V0aWxzL2NvbG9yLXNldHMnO1xuXG5leHBvcnQgY2xhc3MgQ29sb3JIZWxwZXIge1xuICBzY2FsZTogYW55O1xuICBzY2FsZVR5cGU6IGFueTtcbiAgY29sb3JEb21haW46IGFueVtdO1xuICBkb21haW46IGFueTtcbiAgY3VzdG9tQ29sb3JzOiBhbnk7XG5cbiAgY29uc3RydWN0b3Ioc2NoZW1lLCB0eXBlLCBkb21haW4sIGN1c3RvbUNvbG9ycz8pIHtcbiAgICBpZiAodHlwZW9mIHNjaGVtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHNjaGVtZSA9IGNvbG9yU2V0cy5maW5kKGNzID0+IHtcbiAgICAgICAgcmV0dXJuIGNzLm5hbWUgPT09IHNjaGVtZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLmNvbG9yRG9tYWluID0gc2NoZW1lLmRvbWFpbjtcbiAgICB0aGlzLnNjYWxlVHlwZSA9IHR5cGU7XG4gICAgdGhpcy5kb21haW4gPSBkb21haW47XG4gICAgdGhpcy5jdXN0b21Db2xvcnMgPSBjdXN0b21Db2xvcnM7XG5cbiAgICB0aGlzLnNjYWxlID0gdGhpcy5nZW5lcmF0ZUNvbG9yU2NoZW1lKHNjaGVtZSwgdHlwZSwgdGhpcy5kb21haW4pO1xuICB9XG5cbiAgZ2VuZXJhdGVDb2xvclNjaGVtZShzY2hlbWUsIHR5cGUsIGRvbWFpbikge1xuICAgIGlmICh0eXBlb2Ygc2NoZW1lID09PSAnc3RyaW5nJykge1xuICAgICAgc2NoZW1lID0gY29sb3JTZXRzLmZpbmQoY3MgPT4ge1xuICAgICAgICByZXR1cm4gY3MubmFtZSA9PT0gc2NoZW1lO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGxldCBjb2xvclNjYWxlO1xuICAgIGlmICh0eXBlID09PSAncXVhbnRpbGUnKSB7XG4gICAgICBjb2xvclNjYWxlID0gc2NhbGVRdWFudGlsZSgpXG4gICAgICAgIC5yYW5nZShzY2hlbWUuZG9tYWluKVxuICAgICAgICAuZG9tYWluKGRvbWFpbik7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnb3JkaW5hbCcpIHtcbiAgICAgIGNvbG9yU2NhbGUgPSBzY2FsZU9yZGluYWwoKVxuICAgICAgICAucmFuZ2Uoc2NoZW1lLmRvbWFpbilcbiAgICAgICAgLmRvbWFpbihkb21haW4pO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2xpbmVhcicpIHtcbiAgICAgIC8vIGxpbmVhciBzY2hlbWVzIG11c3QgaGF2ZSBhdCBsZWFzdCAyIGNvbG9yc1xuICAgICAgY29uc3QgY29sb3JEb21haW4gPSBbLi4uc2NoZW1lLmRvbWFpbl07XG4gICAgICBpZiAoY29sb3JEb21haW4ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGNvbG9yRG9tYWluLnB1c2goY29sb3JEb21haW5bMF0pO1xuICAgICAgICB0aGlzLmNvbG9yRG9tYWluID0gY29sb3JEb21haW47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBvaW50cyA9IHJhbmdlKDAsIDEsIDEuMCAvIGNvbG9yRG9tYWluLmxlbmd0aCk7XG4gICAgICBjb2xvclNjYWxlID0gc2NhbGVMaW5lYXIoKVxuICAgICAgICAuZG9tYWluKHBvaW50cylcbiAgICAgICAgLnJhbmdlKGNvbG9yRG9tYWluKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sb3JTY2FsZTtcbiAgfVxuXG4gIGdldENvbG9yKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVmFsdWUgY2FuIG5vdCBiZSBudWxsJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNjYWxlVHlwZSA9PT0gJ2xpbmVhcicpIHtcbiAgICAgIGNvbnN0IHZhbHVlU2NhbGUgPSBzY2FsZUxpbmVhcigpXG4gICAgICAgIC5kb21haW4odGhpcy5kb21haW4pXG4gICAgICAgIC5yYW5nZShbMCwgMV0pO1xuXG4gICAgICByZXR1cm4gdGhpcy5zY2FsZSh2YWx1ZVNjYWxlKHZhbHVlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5jdXN0b21Db2xvcnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VzdG9tQ29sb3JzKHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZm9ybWF0dGVkVmFsdWUgPSB2YWx1ZS50b1N0cmluZygpO1xuICAgICAgbGV0IGZvdW5kOiBhbnk7IC8vIHRvZG8gdHlwZSBjdXN0b21Db2xvcnNcbiAgICAgIGlmICh0aGlzLmN1c3RvbUNvbG9ycyAmJiB0aGlzLmN1c3RvbUNvbG9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvdW5kID0gdGhpcy5jdXN0b21Db2xvcnMuZmluZChtYXBwaW5nID0+IHtcbiAgICAgICAgICByZXR1cm4gbWFwcGluZy5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IGZvcm1hdHRlZFZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgcmV0dXJuIGZvdW5kLnZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NhbGUodmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldExpbmVhckdyYWRpZW50U3RvcHModmFsdWUsIHN0YXJ0KSB7XG4gICAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHN0YXJ0ID0gdGhpcy5kb21haW5bMF07XG4gICAgfVxuXG4gICAgY29uc3QgdmFsdWVTY2FsZSA9IHNjYWxlTGluZWFyKClcbiAgICAgIC5kb21haW4odGhpcy5kb21haW4pXG4gICAgICAucmFuZ2UoWzAsIDFdKTtcblxuICAgIGNvbnN0IGNvbG9yVmFsdWVTY2FsZSA9IHNjYWxlQmFuZCgpXG4gICAgICAuZG9tYWluKHRoaXMuY29sb3JEb21haW4pXG4gICAgICAucmFuZ2UoWzAsIDFdKTtcblxuICAgIGNvbnN0IGVuZENvbG9yID0gdGhpcy5nZXRDb2xvcih2YWx1ZSk7XG5cbiAgICAvLyBnZW5lcmF0ZSB0aGUgc3RvcHNcbiAgICBjb25zdCBzdGFydFZhbCA9IHZhbHVlU2NhbGUoc3RhcnQpO1xuICAgIGNvbnN0IHN0YXJ0Q29sb3IgPSB0aGlzLmdldENvbG9yKHN0YXJ0KTtcblxuICAgIGNvbnN0IGVuZFZhbCA9IHZhbHVlU2NhbGUodmFsdWUpO1xuICAgIGxldCBpID0gMTtcbiAgICBsZXQgY3VycmVudFZhbCA9IHN0YXJ0VmFsO1xuICAgIGNvbnN0IHN0b3BzID0gW107XG5cbiAgICBzdG9wcy5wdXNoKHtcbiAgICAgIGNvbG9yOiBzdGFydENvbG9yLFxuICAgICAgb2Zmc2V0OiBzdGFydFZhbCxcbiAgICAgIG9yaWdpbmFsT2Zmc2V0OiBzdGFydFZhbCxcbiAgICAgIG9wYWNpdHk6IDFcbiAgICB9KTtcblxuICAgIHdoaWxlIChjdXJyZW50VmFsIDwgZW5kVmFsICYmIGkgPCB0aGlzLmNvbG9yRG9tYWluLmxlbmd0aCkge1xuICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmNvbG9yRG9tYWluW2ldO1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gY29sb3JWYWx1ZVNjYWxlKGNvbG9yKTtcbiAgICAgIGlmIChvZmZzZXQgPD0gc3RhcnRWYWwpIHtcbiAgICAgICAgaSsrO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9mZnNldC50b0ZpeGVkKDQpID49IChlbmRWYWwgLSBjb2xvclZhbHVlU2NhbGUuYmFuZHdpZHRoKCkpLnRvRml4ZWQoNCkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHN0b3BzLnB1c2goe1xuICAgICAgICBjb2xvcixcbiAgICAgICAgb2Zmc2V0LFxuICAgICAgICBvcGFjaXR5OiAxXG4gICAgICB9KTtcbiAgICAgIGN1cnJlbnRWYWwgPSBvZmZzZXQ7XG4gICAgICBpKys7XG4gICAgfVxuXG4gICAgaWYgKHN0b3BzW3N0b3BzLmxlbmd0aCAtIDFdLm9mZnNldCA8IDEwMCkge1xuICAgICAgc3RvcHMucHVzaCh7XG4gICAgICAgIGNvbG9yOiBlbmRDb2xvcixcbiAgICAgICAgb2Zmc2V0OiBlbmRWYWwsXG4gICAgICAgIG9wYWNpdHk6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChlbmRWYWwgPT09IHN0YXJ0VmFsKSB7XG4gICAgICBzdG9wc1swXS5vZmZzZXQgPSAwO1xuICAgICAgc3RvcHNbMV0ub2Zmc2V0ID0gMTAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBub3JtYWxpemUgdGhlIG9mZnNldHMgaW50byBwZXJjZW50YWdlc1xuICAgICAgaWYgKHN0b3BzW3N0b3BzLmxlbmd0aCAtIDFdLm9mZnNldCAhPT0gMTAwKSB7XG4gICAgICAgIGZvciAoY29uc3QgcyBvZiBzdG9wcykge1xuICAgICAgICAgIHMub2Zmc2V0ID0gKChzLm9mZnNldCAtIHN0YXJ0VmFsKSAvIChlbmRWYWwgLSBzdGFydFZhbCkpICogMTAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0b3BzO1xuICB9XG59XG4iXX0=
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(null, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/common/locales/be", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // THIS CODE IS GENERATED - DO NOT MODIFY
    // See angular/tools/gulp-tasks/cldr/extract.js
    var u = undefined;
    function plural(n) {
        if (n % 10 === 1 && !(n % 100 === 11))
            return 1;
        if (n % 10 === Math.floor(n % 10) && n % 10 >= 2 && n % 10 <= 4 &&
            !(n % 100 >= 12 && n % 100 <= 14))
            return 3;
        if (n % 10 === 0 || n % 10 === Math.floor(n % 10) && n % 10 >= 5 && n % 10 <= 9 ||
            n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 14)
            return 4;
        return 5;
    }
    exports.default = [
        'be',
        [['am', 'pm'], ['AM', 'PM'], u],
        [['AM', 'PM'], u, u],
        [
            ['н', 'п', 'а', 'с', 'ч', 'п', 'с'],
            ['нд', 'пн', 'аў', 'ср', 'чц', 'пт', 'сб'],
            [
                'нядзеля', 'панядзелак', 'аўторак', 'серада', 'чацвер',
                'пятніца', 'субота'
            ],
            ['нд', 'пн', 'аў', 'ср', 'чц', 'пт', 'сб']
        ],
        u,
        [
            ['с', 'л', 'с', 'к', 'м', 'ч', 'л', 'ж', 'в', 'к', 'л', 'с'],
            [
                'сту', 'лют', 'сак', 'кра', 'мая', 'чэр', 'ліп', 'жні', 'вер',
                'кас', 'ліс', 'сне'
            ],
            [
                'студзеня', 'лютага', 'сакавіка', 'красавіка', 'мая',
                'чэрвеня', 'ліпеня', 'жніўня', 'верасня', 'кастрычніка',
                'лістапада', 'снежня'
            ]
        ],
        [
            ['с', 'л', 'с', 'к', 'м', 'ч', 'л', 'ж', 'в', 'к', 'л', 'с'],
            [
                'сту', 'лют', 'сак', 'кра', 'май', 'чэр', 'ліп', 'жні', 'вер',
                'кас', 'ліс', 'сне'
            ],
            [
                'студзень', 'люты', 'сакавік', 'красавік', 'май',
                'чэрвень', 'ліпень', 'жнівень', 'верасень',
                'кастрычнік', 'лістапад', 'снежань'
            ]
        ],
        [
            ['да н.э.', 'н.э.'], u,
            ['да нараджэння Хрыстова', 'ад нараджэння Хрыстова']
        ],
        1,
        [6, 0],
        ['d.MM.yy', 'd.MM.y', 'd MMMM y \'г\'.', 'EEEE, d MMMM y \'г\'.'],
        ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss, zzzz'],
        ['{1}, {0}', u, '{1} \'у\' {0}', u],
        [',', ' ', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'],
        ['#,##0.###', '#,##0 %', '#,##0.00 ¤', '#E0'],
        'BYN',
        'Br',
        'беларускі рубель',
        {
            'AUD': ['A$'],
            'BBD': [u, 'Bds$'],
            'BMD': [u, 'BD$'],
            'BRL': [u, 'R$'],
            'BSD': [u, 'B$'],
            'BYN': ['Br'],
            'BZD': [u, 'BZ$'],
            'CAD': [u, 'CA$'],
            'CUC': [u, 'CUC$'],
            'CUP': [u, '$MN'],
            'DOP': [u, 'RD$'],
            'FJD': [u, 'FJ$'],
            'FKP': [u, 'FK£'],
            'GYD': [u, 'G$'],
            'ISK': [u, 'Íkr'],
            'JMD': [u, 'J$'],
            'KYD': [u, 'CI$'],
            'LRD': [u, 'L$'],
            'MXN': ['MX$'],
            'NAD': [u, 'N$'],
            'NZD': [u, 'NZ$'],
            'RUB': ['₽', 'руб.'],
            'SBD': [u, 'SI$'],
            'SGD': [u, 'S$'],
            'TTD': [u, 'TT$'],
            'UYU': [u, '$U'],
            'XCD': ['EC$']
        },
        plural
    ];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9iZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILHlDQUF5QztJQUN6QywrQ0FBK0M7SUFFL0MsSUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBRXBCLFNBQVMsTUFBTSxDQUFDLENBQVM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsS0FBSyxFQUFFLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDO1lBQzNELENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLEVBQUUsQ0FBQztZQUNuQyxPQUFPLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUM7WUFDM0UsQ0FBQyxHQUFHLEdBQUcsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLEVBQUU7WUFDbkUsT0FBTyxDQUFDLENBQUM7UUFDWCxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxrQkFBZTtRQUNiLElBQUk7UUFDSixDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEI7WUFDRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztZQUNuQyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztZQUMxQztnQkFDRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsUUFBUTtnQkFDdEQsU0FBUyxFQUFFLFFBQVE7YUFDcEI7WUFDRCxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztTQUMzQztRQUNELENBQUM7UUFDRDtZQUNFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7WUFDNUQ7Z0JBQ0UsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO2dCQUM3RCxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7YUFDcEI7WUFDRDtnQkFDRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsS0FBSztnQkFDcEQsU0FBUyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGFBQWE7Z0JBQ3ZELFdBQVcsRUFBRSxRQUFRO2FBQ3RCO1NBQ0Y7UUFDRDtZQUNFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7WUFDNUQ7Z0JBQ0UsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO2dCQUM3RCxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7YUFDcEI7WUFDRDtnQkFDRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSztnQkFDaEQsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsVUFBVTtnQkFDMUMsWUFBWSxFQUFFLFVBQVUsRUFBRSxTQUFTO2FBQ3BDO1NBQ0Y7UUFDRDtZQUNFLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUM7WUFDdEIsQ0FBQyx3QkFBd0IsRUFBRSx3QkFBd0IsQ0FBQztTQUNyRDtRQUNELENBQUM7UUFDRCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDTixDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsdUJBQXVCLENBQUM7UUFDakUsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQztRQUNyRCxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQztRQUNuQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDO1FBQzlELENBQUMsV0FBVyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxDQUFDO1FBQzdDLEtBQUs7UUFDTCxJQUFJO1FBQ0osa0JBQWtCO1FBQ2xCO1lBQ0UsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ2IsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQztZQUNsQixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDO1lBQ2pCLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUM7WUFDaEIsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQztZQUNoQixLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDYixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDO1lBQ2pCLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUM7WUFDakIsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQztZQUNsQixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDO1lBQ2pCLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUM7WUFDakIsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQztZQUNqQixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDO1lBQ2pCLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUM7WUFDaEIsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQztZQUNqQixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDO1lBQ2hCLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUM7WUFDakIsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQztZQUNoQixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDZCxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDO1lBQ2hCLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUM7WUFDakIsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQztZQUNwQixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDO1lBQ2pCLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUM7WUFDaEIsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQztZQUNqQixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDO1lBQ2hCLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQztTQUNmO1FBQ0QsTUFBTTtLQUNQLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8vIFRISVMgQ09ERSBJUyBHRU5FUkFURUQgLSBETyBOT1QgTU9ESUZZXG4vLyBTZWUgYW5ndWxhci90b29scy9ndWxwLXRhc2tzL2NsZHIvZXh0cmFjdC5qc1xuXG5jb25zdCB1ID0gdW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBwbHVyYWwobjogbnVtYmVyKTogbnVtYmVyIHtcbiAgaWYgKG4gJSAxMCA9PT0gMSAmJiAhKG4gJSAxMDAgPT09IDExKSkgcmV0dXJuIDE7XG4gIGlmIChuICUgMTAgPT09IE1hdGguZmxvb3IobiAlIDEwKSAmJiBuICUgMTAgPj0gMiAmJiBuICUgMTAgPD0gNCAmJlxuICAgICAgIShuICUgMTAwID49IDEyICYmIG4gJSAxMDAgPD0gMTQpKVxuICAgIHJldHVybiAzO1xuICBpZiAobiAlIDEwID09PSAwIHx8IG4gJSAxMCA9PT0gTWF0aC5mbG9vcihuICUgMTApICYmIG4gJSAxMCA+PSA1ICYmIG4gJSAxMCA8PSA5IHx8XG4gICAgICBuICUgMTAwID09PSBNYXRoLmZsb29yKG4gJSAxMDApICYmIG4gJSAxMDAgPj0gMTEgJiYgbiAlIDEwMCA8PSAxNClcbiAgICByZXR1cm4gNDtcbiAgcmV0dXJuIDU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAgJ2JlJyxcbiAgW1snYW0nLCAncG0nXSwgWydBTScsICdQTSddLCB1XSxcbiAgW1snQU0nLCAnUE0nXSwgdSwgdV0sXG4gIFtcbiAgICBbJ9C9JywgJ9C/JywgJ9CwJywgJ9GBJywgJ9GHJywgJ9C/JywgJ9GBJ10sXG4gICAgWyfQvdC0JywgJ9C/0L0nLCAn0LDRnicsICfRgdGAJywgJ9GH0YYnLCAn0L/RgicsICfRgdCxJ10sXG4gICAgW1xuICAgICAgJ9C90Y/QtNC30LXQu9GPJywgJ9C/0LDQvdGP0LTQt9C10LvQsNC6JywgJ9Cw0Z7RgtC+0YDQsNC6JywgJ9GB0LXRgNCw0LTQsCcsICfRh9Cw0YbQstC10YAnLFxuICAgICAgJ9C/0Y/RgtC90ZbRhtCwJywgJ9GB0YPQsdC+0YLQsCdcbiAgICBdLFxuICAgIFsn0L3QtCcsICfQv9C9JywgJ9Cw0Z4nLCAn0YHRgCcsICfRh9GGJywgJ9C/0YInLCAn0YHQsSddXG4gIF0sXG4gIHUsXG4gIFtcbiAgICBbJ9GBJywgJ9C7JywgJ9GBJywgJ9C6JywgJ9C8JywgJ9GHJywgJ9C7JywgJ9C2JywgJ9CyJywgJ9C6JywgJ9C7JywgJ9GBJ10sXG4gICAgW1xuICAgICAgJ9GB0YLRgycsICfQu9GO0YInLCAn0YHQsNC6JywgJ9C60YDQsCcsICfQvNCw0Y8nLCAn0YfRjdGAJywgJ9C70ZbQvycsICfQttC90ZYnLCAn0LLQtdGAJyxcbiAgICAgICfQutCw0YEnLCAn0LvRltGBJywgJ9GB0L3QtSdcbiAgICBdLFxuICAgIFtcbiAgICAgICfRgdGC0YPQtNC30LXQvdGPJywgJ9C70Y7RgtCw0LPQsCcsICfRgdCw0LrQsNCy0ZbQutCwJywgJ9C60YDQsNGB0LDQstGW0LrQsCcsICfQvNCw0Y8nLFxuICAgICAgJ9GH0Y3RgNCy0LXQvdGPJywgJ9C70ZbQv9C10L3RjycsICfQttC90ZbRntC90Y8nLCAn0LLQtdGA0LDRgdC90Y8nLCAn0LrQsNGB0YLRgNGL0YfQvdGW0LrQsCcsXG4gICAgICAn0LvRltGB0YLQsNC/0LDQtNCwJywgJ9GB0L3QtdC20L3RjydcbiAgICBdXG4gIF0sXG4gIFtcbiAgICBbJ9GBJywgJ9C7JywgJ9GBJywgJ9C6JywgJ9C8JywgJ9GHJywgJ9C7JywgJ9C2JywgJ9CyJywgJ9C6JywgJ9C7JywgJ9GBJ10sXG4gICAgW1xuICAgICAgJ9GB0YLRgycsICfQu9GO0YInLCAn0YHQsNC6JywgJ9C60YDQsCcsICfQvNCw0LknLCAn0YfRjdGAJywgJ9C70ZbQvycsICfQttC90ZYnLCAn0LLQtdGAJyxcbiAgICAgICfQutCw0YEnLCAn0LvRltGBJywgJ9GB0L3QtSdcbiAgICBdLFxuICAgIFtcbiAgICAgICfRgdGC0YPQtNC30LXQvdGMJywgJ9C70Y7RgtGLJywgJ9GB0LDQutCw0LLRltC6JywgJ9C60YDQsNGB0LDQstGW0LonLCAn0LzQsNC5JyxcbiAgICAgICfRh9GN0YDQstC10L3RjCcsICfQu9GW0L/QtdC90YwnLCAn0LbQvdGW0LLQtdC90YwnLCAn0LLQtdGA0LDRgdC10L3RjCcsXG4gICAgICAn0LrQsNGB0YLRgNGL0YfQvdGW0LonLCAn0LvRltGB0YLQsNC/0LDQtCcsICfRgdC90LXQttCw0L3RjCdcbiAgICBdXG4gIF0sXG4gIFtcbiAgICBbJ9C00LAg0L0u0Y0uJywgJ9C9LtGNLiddLCB1LFxuICAgIFsn0LTQsCDQvdCw0YDQsNC00LbRjdC90L3RjyDQpdGA0YvRgdGC0L7QstCwJywgJ9Cw0LQg0L3QsNGA0LDQtNC20Y3QvdC90Y8g0KXRgNGL0YHRgtC+0LLQsCddXG4gIF0sXG4gIDEsXG4gIFs2LCAwXSxcbiAgWydkLk1NLnl5JywgJ2QuTU0ueScsICdkIE1NTU0geSBcXCfQs1xcJy4nLCAnRUVFRSwgZCBNTU1NIHkgXFwn0LNcXCcuJ10sXG4gIFsnSEg6bW0nLCAnSEg6bW06c3MnLCAnSEg6bW06c3MgeicsICdISDptbTpzcywgenp6eiddLFxuICBbJ3sxfSwgezB9JywgdSwgJ3sxfSBcXCfRg1xcJyB7MH0nLCB1XSxcbiAgWycsJywgJ8KgJywgJzsnLCAnJScsICcrJywgJy0nLCAnRScsICfDlycsICfigLAnLCAn4oieJywgJ05hTicsICc6J10sXG4gIFsnIywjIzAuIyMjJywgJyMsIyMwwqAlJywgJyMsIyMwLjAwwqDCpCcsICcjRTAnXSxcbiAgJ0JZTicsXG4gICdCcicsXG4gICfQsdC10LvQsNGA0YPRgdC60ZYg0YDRg9Cx0LXQu9GMJyxcbiAge1xuICAgICdBVUQnOiBbJ0EkJ10sXG4gICAgJ0JCRCc6IFt1LCAnQmRzJCddLFxuICAgICdCTUQnOiBbdSwgJ0JEJCddLFxuICAgICdCUkwnOiBbdSwgJ1IkJ10sXG4gICAgJ0JTRCc6IFt1LCAnQiQnXSxcbiAgICAnQllOJzogWydCciddLFxuICAgICdCWkQnOiBbdSwgJ0JaJCddLFxuICAgICdDQUQnOiBbdSwgJ0NBJCddLFxuICAgICdDVUMnOiBbdSwgJ0NVQyQnXSxcbiAgICAnQ1VQJzogW3UsICckTU4nXSxcbiAgICAnRE9QJzogW3UsICdSRCQnXSxcbiAgICAnRkpEJzogW3UsICdGSiQnXSxcbiAgICAnRktQJzogW3UsICdGS8KjJ10sXG4gICAgJ0dZRCc6IFt1LCAnRyQnXSxcbiAgICAnSVNLJzogW3UsICfDjWtyJ10sXG4gICAgJ0pNRCc6IFt1LCAnSiQnXSxcbiAgICAnS1lEJzogW3UsICdDSSQnXSxcbiAgICAnTFJEJzogW3UsICdMJCddLFxuICAgICdNWE4nOiBbJ01YJCddLFxuICAgICdOQUQnOiBbdSwgJ04kJ10sXG4gICAgJ05aRCc6IFt1LCAnTlokJ10sXG4gICAgJ1JVQic6IFsn4oK9JywgJ9GA0YPQsS4nXSxcbiAgICAnU0JEJzogW3UsICdTSSQnXSxcbiAgICAnU0dEJzogW3UsICdTJCddLFxuICAgICdUVEQnOiBbdSwgJ1RUJCddLFxuICAgICdVWVUnOiBbdSwgJyRVJ10sXG4gICAgJ1hDRCc6IFsnRUMkJ11cbiAgfSxcbiAgcGx1cmFsXG5dO1xuIl19
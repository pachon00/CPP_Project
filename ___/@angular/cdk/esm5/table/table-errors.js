/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Returns an error to be thrown when attempting to find an unexisting column.
 * @param id Id whose lookup failed.
 * @docs-private
 */
export function getTableUnknownColumnError(id) {
    return Error("Could not find column with id \"" + id + "\".");
}
/**
 * Returns an error to be thrown when two column definitions have the same name.
 * @docs-private
 */
export function getTableDuplicateColumnNameError(name) {
    return Error("Duplicate column definition name provided: \"" + name + "\".");
}
/**
 * Returns an error to be thrown when there are multiple rows that are missing a when function.
 * @docs-private
 */
export function getTableMultipleDefaultRowDefsError() {
    return Error("There can only be one default row without a when predicate function.");
}
/**
 * Returns an error to be thrown when there are no matching row defs for a particular set of data.
 * @docs-private
 */
export function getTableMissingMatchingRowDefError(data) {
    return Error("Could not find a matching row definition for the" +
        ("provided row data: " + JSON.stringify(data)));
}
/**
 * Returns an error to be thrown when there is no row definitions present in the content.
 * @docs-private
 */
export function getTableMissingRowDefsError() {
    return Error('Missing definitions for header, footer, and row; ' +
        'cannot determine which columns should be rendered.');
}
/**
 * Returns an error to be thrown when the data source does not match the compatible types.
 * @docs-private
 */
export function getTableUnknownDataSourceError() {
    return Error("Provided data source did not match an array, Observable, or DataSource");
}
/**
 * Returns an error to be thrown when the text column cannot find a parent table to inject.
 * @docs-private
 */
export function getTableTextColumnMissingParentTableError() {
    return Error("Text column could not find a parent table for registration.");
}
/**
 * Returns an error to be thrown when a table text column doesn't have a name.
 * @docs-private
 */
export function getTableTextColumnMissingNameError() {
    return Error("Table text column must have a name.");
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZXJyb3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay90YWJsZS90YWJsZS1lcnJvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUg7Ozs7R0FJRztBQUNILE1BQU0sVUFBVSwwQkFBMEIsQ0FBQyxFQUFVO0lBQ25ELE9BQU8sS0FBSyxDQUFDLHFDQUFrQyxFQUFFLFFBQUksQ0FBQyxDQUFDO0FBQ3pELENBQUM7QUFFRDs7O0dBR0c7QUFDSCxNQUFNLFVBQVUsZ0NBQWdDLENBQUMsSUFBWTtJQUMzRCxPQUFPLEtBQUssQ0FBQyxrREFBK0MsSUFBSSxRQUFJLENBQUMsQ0FBQztBQUN4RSxDQUFDO0FBRUQ7OztHQUdHO0FBQ0gsTUFBTSxVQUFVLG1DQUFtQztJQUNqRCxPQUFPLEtBQUssQ0FBQyxzRUFBc0UsQ0FBQyxDQUFDO0FBQ3ZGLENBQUM7QUFFRDs7O0dBR0c7QUFDSCxNQUFNLFVBQVUsa0NBQWtDLENBQUMsSUFBUztJQUMxRCxPQUFPLEtBQUssQ0FBQyxrREFBa0Q7U0FDM0Qsd0JBQXNCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFHLENBQUEsQ0FBQyxDQUFDO0FBQ3BELENBQUM7QUFFRDs7O0dBR0c7QUFDSCxNQUFNLFVBQVUsMkJBQTJCO0lBQ3pDLE9BQU8sS0FBSyxDQUFDLG1EQUFtRDtRQUM1RCxvREFBb0QsQ0FBQyxDQUFDO0FBQzVELENBQUM7QUFFRDs7O0dBR0c7QUFDSCxNQUFNLFVBQVUsOEJBQThCO0lBQzVDLE9BQU8sS0FBSyxDQUFDLHdFQUF3RSxDQUFDLENBQUM7QUFDekYsQ0FBQztBQUVEOzs7R0FHRztBQUNILE1BQU0sVUFBVSx5Q0FBeUM7SUFDdkQsT0FBTyxLQUFLLENBQUMsNkRBQTZELENBQUMsQ0FBQztBQUM5RSxDQUFDO0FBRUQ7OztHQUdHO0FBQ0gsTUFBTSxVQUFVLGtDQUFrQztJQUNoRCxPQUFPLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO0FBQ3RELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyoqXG4gKiBSZXR1cm5zIGFuIGVycm9yIHRvIGJlIHRocm93biB3aGVuIGF0dGVtcHRpbmcgdG8gZmluZCBhbiB1bmV4aXN0aW5nIGNvbHVtbi5cbiAqIEBwYXJhbSBpZCBJZCB3aG9zZSBsb29rdXAgZmFpbGVkLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFibGVVbmtub3duQ29sdW1uRXJyb3IoaWQ6IHN0cmluZykge1xuICByZXR1cm4gRXJyb3IoYENvdWxkIG5vdCBmaW5kIGNvbHVtbiB3aXRoIGlkIFwiJHtpZH1cIi5gKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGFuIGVycm9yIHRvIGJlIHRocm93biB3aGVuIHR3byBjb2x1bW4gZGVmaW5pdGlvbnMgaGF2ZSB0aGUgc2FtZSBuYW1lLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFibGVEdXBsaWNhdGVDb2x1bW5OYW1lRXJyb3IobmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiBFcnJvcihgRHVwbGljYXRlIGNvbHVtbiBkZWZpbml0aW9uIG5hbWUgcHJvdmlkZWQ6IFwiJHtuYW1lfVwiLmApO1xufVxuXG4vKipcbiAqIFJldHVybnMgYW4gZXJyb3IgdG8gYmUgdGhyb3duIHdoZW4gdGhlcmUgYXJlIG11bHRpcGxlIHJvd3MgdGhhdCBhcmUgbWlzc2luZyBhIHdoZW4gZnVuY3Rpb24uXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUYWJsZU11bHRpcGxlRGVmYXVsdFJvd0RlZnNFcnJvcigpIHtcbiAgcmV0dXJuIEVycm9yKGBUaGVyZSBjYW4gb25seSBiZSBvbmUgZGVmYXVsdCByb3cgd2l0aG91dCBhIHdoZW4gcHJlZGljYXRlIGZ1bmN0aW9uLmApO1xufVxuXG4vKipcbiAqIFJldHVybnMgYW4gZXJyb3IgdG8gYmUgdGhyb3duIHdoZW4gdGhlcmUgYXJlIG5vIG1hdGNoaW5nIHJvdyBkZWZzIGZvciBhIHBhcnRpY3VsYXIgc2V0IG9mIGRhdGEuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUYWJsZU1pc3NpbmdNYXRjaGluZ1Jvd0RlZkVycm9yKGRhdGE6IGFueSkge1xuICByZXR1cm4gRXJyb3IoYENvdWxkIG5vdCBmaW5kIGEgbWF0Y2hpbmcgcm93IGRlZmluaXRpb24gZm9yIHRoZWAgK1xuICAgICAgYHByb3ZpZGVkIHJvdyBkYXRhOiAke0pTT04uc3RyaW5naWZ5KGRhdGEpfWApO1xufVxuXG4vKipcbiAqIFJldHVybnMgYW4gZXJyb3IgdG8gYmUgdGhyb3duIHdoZW4gdGhlcmUgaXMgbm8gcm93IGRlZmluaXRpb25zIHByZXNlbnQgaW4gdGhlIGNvbnRlbnQuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUYWJsZU1pc3NpbmdSb3dEZWZzRXJyb3IoKSB7XG4gIHJldHVybiBFcnJvcignTWlzc2luZyBkZWZpbml0aW9ucyBmb3IgaGVhZGVyLCBmb290ZXIsIGFuZCByb3c7ICcgK1xuICAgICAgJ2Nhbm5vdCBkZXRlcm1pbmUgd2hpY2ggY29sdW1ucyBzaG91bGQgYmUgcmVuZGVyZWQuJyk7XG59XG5cbi8qKlxuICogUmV0dXJucyBhbiBlcnJvciB0byBiZSB0aHJvd24gd2hlbiB0aGUgZGF0YSBzb3VyY2UgZG9lcyBub3QgbWF0Y2ggdGhlIGNvbXBhdGlibGUgdHlwZXMuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUYWJsZVVua25vd25EYXRhU291cmNlRXJyb3IoKSB7XG4gIHJldHVybiBFcnJvcihgUHJvdmlkZWQgZGF0YSBzb3VyY2UgZGlkIG5vdCBtYXRjaCBhbiBhcnJheSwgT2JzZXJ2YWJsZSwgb3IgRGF0YVNvdXJjZWApO1xufVxuXG4vKipcbiAqIFJldHVybnMgYW4gZXJyb3IgdG8gYmUgdGhyb3duIHdoZW4gdGhlIHRleHQgY29sdW1uIGNhbm5vdCBmaW5kIGEgcGFyZW50IHRhYmxlIHRvIGluamVjdC5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRhYmxlVGV4dENvbHVtbk1pc3NpbmdQYXJlbnRUYWJsZUVycm9yKCkge1xuICByZXR1cm4gRXJyb3IoYFRleHQgY29sdW1uIGNvdWxkIG5vdCBmaW5kIGEgcGFyZW50IHRhYmxlIGZvciByZWdpc3RyYXRpb24uYCk7XG59XG5cbi8qKlxuICogUmV0dXJucyBhbiBlcnJvciB0byBiZSB0aHJvd24gd2hlbiBhIHRhYmxlIHRleHQgY29sdW1uIGRvZXNuJ3QgaGF2ZSBhIG5hbWUuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUYWJsZVRleHRDb2x1bW5NaXNzaW5nTmFtZUVycm9yKCkge1xuICByZXR1cm4gRXJyb3IoYFRhYmxlIHRleHQgY29sdW1uIG11c3QgaGF2ZSBhIG5hbWUuYCk7XG59XG4iXX0=
export var equalTo = function (equalControl) {
    var subscribe = false;
    return function (control) {
        if (!subscribe) {
            subscribe = true;
            equalControl.valueChanges.subscribe(function () {
                control.updateValueAndValidity();
            });
        }
        var v = control.value;
        return equalControl.value === v ? null : { equalTo: { control: equalControl, value: equalControl.value } };
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWN1c3RvbS12YWxpZGF0b3JzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9lcXVhbC10by92YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxDQUFDLElBQU0sT0FBTyxHQUFHLFVBQUMsWUFBNkI7SUFDbkQsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBRXRCLE9BQU8sVUFBQyxPQUF3QjtRQUM5QixJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2QsU0FBUyxHQUFHLElBQUksQ0FBQztZQUNqQixZQUFZLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQztnQkFDbEMsT0FBTyxDQUFDLHNCQUFzQixFQUFFLENBQUM7WUFDbkMsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUVELElBQU0sQ0FBQyxHQUFXLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFFaEMsT0FBTyxZQUFZLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFlBQVksQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDO0lBQzdHLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdGlvbkVycm9ycywgVmFsaWRhdG9yRm4gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBjb25zdCBlcXVhbFRvID0gKGVxdWFsQ29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdG9yRm4gPT4ge1xuICBsZXQgc3Vic2NyaWJlID0gZmFsc2U7XG5cbiAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzID0+IHtcbiAgICBpZiAoIXN1YnNjcmliZSkge1xuICAgICAgc3Vic2NyaWJlID0gdHJ1ZTtcbiAgICAgIGVxdWFsQ29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCB2OiBzdHJpbmcgPSBjb250cm9sLnZhbHVlO1xuXG4gICAgcmV0dXJuIGVxdWFsQ29udHJvbC52YWx1ZSA9PT0gdiA/IG51bGwgOiB7IGVxdWFsVG86IHsgY29udHJvbDogZXF1YWxDb250cm9sLCB2YWx1ZTogZXF1YWxDb250cm9sLnZhbHVlIH0gfTtcbiAgfTtcbn07XG4iXX0=
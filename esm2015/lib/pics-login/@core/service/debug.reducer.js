export function debug(reducer) {
    return function (state, action) {
        const newState = reducer(state, action);
        console.log(`[DEBUG] action: ${action.type}`, {
            payload: action.payload,
            oldState: state,
            newState
        });
        return newState;
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVidWcucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9sb2dpbi9zcmMvbGliL3BpY3MtbG9naW4vQGNvcmUvc2VydmljZS9kZWJ1Zy5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBLE1BQU0sVUFBVSxLQUFLLENBQUMsT0FBZ0M7SUFDcEQsT0FBTyxVQUFVLEtBQUssRUFBRSxNQUFNO1FBQzVCLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFO1lBQzVDLE9BQU8sRUFBUSxNQUFPLENBQUMsT0FBTztZQUM5QixRQUFRLEVBQUUsS0FBSztZQUNmLFFBQVE7U0FDVCxDQUFDLENBQUM7UUFDSCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IEFjdGlvblJlZHVjZXIgfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSAnLi9jb3JlLnN0YXRlJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWJ1ZyhyZWR1Y2VyOiBBY3Rpb25SZWR1Y2VyPEFwcFN0YXRlPik6IEFjdGlvblJlZHVjZXI8QXBwU3RhdGU+IHtcclxuICByZXR1cm4gZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgIGNvbnN0IG5ld1N0YXRlID0gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcclxuICAgIGNvbnNvbGUubG9nKGBbREVCVUddIGFjdGlvbjogJHthY3Rpb24udHlwZX1gLCB7XHJcbiAgICAgIHBheWxvYWQ6ICg8YW55PmFjdGlvbikucGF5bG9hZCxcclxuICAgICAgb2xkU3RhdGU6IHN0YXRlLFxyXG4gICAgICBuZXdTdGF0ZVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gbmV3U3RhdGU7XHJcbiAgfTtcclxufVxyXG4iXX0=
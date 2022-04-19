// node myfile.js
const pendingTimers = [];
const pendingOSTaks = [];
const pendingOperations = [];

// New timers, tasks, operation are recorded from myfile running
function shouldContinue(){
	// Check one: any pending settimeout, setInterval, setImmediate
	// Check two: any pending os task? (like server listening to Port)
	// Check three: any pending long running operation (like fs module)
	return pendingTimers.length || pendingOSTaks.length || pendingOperations.length;
}

// entire body execute in one 'tick'
while(shouldContinue()){
	// 1) Node looks at pendingTimers and see if any functions are ready to be call. setTimeout, setInterval
	
	// 2) Node looks at pendingOSTaks and pendingOperations and call relevant callbacks

	// 3) Pause execution. Continue when...
	// - a new pendingOsTask is done
	// - a new pendingOperation is done
	// - a timer is about to complete

	// 4) Look at pendingTimers. Call any setImmediate

	// 5) Handle any close events
	
}

// exit back to terminal

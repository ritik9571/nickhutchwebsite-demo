'use es6';

class RequestStatus {
    constructor(request) {
        this.request = request;
    }

    getStatus() {
        return this.request.status;
    }

    isDone() {
        return this.request.readyState === XMLHttpRequest.DONE;
    }

    isSuccessful() {
        return this.isDone() && this.request.status >= 200 && this.request.status < 300;
    }

    isFailed() {
        return this.isDone() && !this.isSuccessful();
    }

}

export default RequestStatus;
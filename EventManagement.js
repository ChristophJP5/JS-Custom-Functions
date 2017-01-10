class _Page {
    constructor(name) {
        this.events = new _EventList();
        this.name = name;
        this.loaded = true;
    }

    callback() {

    }

    modal() {

    }

    confirm() {

    }


    toString() {
        return this.name;
    }

    sidebar() {

    }
}

class _Event {
    constructor(context, trigger, query, method) {
        this.id = Math.round(Math.random() * 1000)
        this.name = 'event_' + context + '_' + trigger + '_' + query + '_' + this.id;
        this.context = context;
        this.trigger = trigger;
        this.query = query;
        this.method = method;
        this.$context = $(context);
        return this;
    }

    unbind() {
        if (this.query) {
            this.context.off(this.trigger, this.query, this.method);
        } else {
            this.$context.off(event.trigger, event.method);
        }
        return this;
    }

    bind() {
        if (this.query) {
            this.$context.on(this.trigger, this.query, this.method);
        } else {
            this.$context.on(event.trigger, event.method);
        }
        return this;
    }

    rebind() {
        this.unbind();
        this.bind();
        return this;
    }
}

class _EventList {
    constructor() {
        this.events = {};
        // no intresst
        return this;
    }

    add(event) {
        this.events[event.name] = event;
        event.bind();
        return this;
    }

    remove(event) {
        event.unbind();
        delete this.events[event.name];
        return this;
    }

    all(action) {
        var actions = ['bind', 'unbind', 'rebind'];
        if (actions.indexOf(action) !== -1) {
            Object.keys(this.events).forEach(function (eventName) {
                this.events[eventName][action]();
            })
        }
        return this;
    }
}

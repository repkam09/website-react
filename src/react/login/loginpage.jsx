var React = require('react');

module.exports = React.createClass({
    getInitialState: function () {
        return { disableFields: false };
    },

    componentDidMount: function () {
        console.log("Loginpage Loaded");
    },

    setUname: function (event) {
        var username = event.currentTarget.value;
        this.setState({ username });
    },

    setPass: function (event) {
        var password = event.currentTarget.value;
        this.setState({ password });
    },

    tryLogin: function (event) {
        this.setState({ disableFields: true })
        console.log(this.state.username);
        console.log(this.state.password);

        var that = this;
        getreq("https://api.repkam09.com/api/about").then((response) => {
            var apilist = JSON.parse(response);
            that.setState({ apilist });
        });
    },

    render: function () {
        return (
            <div className="login-page-react">
                <div className="container">
                    <label><b>Username </b></label>
                    <input type="text" placeholder="Enter Username" name="uname" onChange={this.setUname} readonly={this.state.disableFields} required />
                    <br />
                    <label><b>Password </b></label>
                    <input type="password" placeholder="Enter Password" name="psw" onChange={this.setPass} readonly={this.state.disableFields} required />
                    <br />
                    <button type="submit" onClick={this.tryLogin } disabled={this.state.disableFields} >Login</button>
                </div>
            </div>
        );
    }
});
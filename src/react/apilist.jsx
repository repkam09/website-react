var React = require('react');

module.exports = React.createClass({
    getInitialState: function () {
        return { apilist: [] };
    },

    componentDidMount: function () {
        var that = this;
        getreq("https://api.repkam09.com/api/about").then((response) => {
            var apilist = JSON.parse(response);
            that.setState({ apilist });
        });
    },

    render: function () {
        if (this.state.apilist.length > 0) {
            var list = this.state.apilist.map((current) => {
                return (
                    <tr key={current.path}>
                        <td>{current.method}</td>
                        <td>{current.path}</td>
                    </tr>
                );
            });

            return (
                <div className="api-info">
                    <table>
                        <tbody>
                            <tr>
                                <th>Method</th>
                                <th>Path</th>
                            </tr>
                            {list}
                        </tbody>
                    </table>
                </div>
            );
        } else {
            return (
                <div className="api-info">
                    <p>There are no active endpoints </p>
                </div>
            );
        }
    }
});
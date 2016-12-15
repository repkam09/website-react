var React = require('react');

module.exports = React.createClass({
    render: function () {
        let skill = this.props.data;
        var imageurl = "/img/runescape/" + skill.name + ".gif"

        var csslevel = "rs-skill-level";

        if (skill.level >= 99 && skill.name != "invention" && skill.name != "dungeoneering") {
            csslevel = "rs-skill-level rs-max-level";
        }

        if (skill.level >= 120 && skill.name == "invention" || skill.name == "dungeoneering") {
            csslevel = "rs-skill-level rs-max-level-elite";
        }

        if (skill.name == "overall") {
            csslevel = "rs-skill-level rs-skill-overall";
        }

        return (
            <div className="rs-skill-line">
                <img src={imageurl} width="16" />
                <div className="rs-skill-spacer" />
                <div className="rs-skill-name">{skill.name}</div>
                <div className="rs-skill-rank">{skill.rank}</div>
                <div className={csslevel}>{skill.level}</div>
                <div className="rs-skill-exp">{skill.exp}</div>
            </div>
        );
    }
});
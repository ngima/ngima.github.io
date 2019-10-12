import React, {Component} from 'react';

export default class ContactUs extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="contact">
                <div className="row section-head">
                    <div className="six centered columns">
                        <h3 className="lead align-center">
                            Feel Free to Contact
                        </h3>
                    </div>
                </div>
                <div className="row">
                    <aside className="four columns footer-widgets">
                        <div className="widget">
                            <h4>Skype :
                                {resumeData.skypeid}
                            </h4>
                        </div>
                    </aside>
                    <aside className="four columns footer-widgets">
                        <div className="widget">
                            <h4>Contact :
                                {resumeData.contact}
                            </h4>
                        </div>
                    </aside>
                    <aside className="four columns footer-widgets">
                        <div className="widget">
                            <h4>Email :
                                {resumeData.email}
                            </h4>
                        </div>
                    </aside>
                </div>
            </section>
        );
    }
}
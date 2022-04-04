import React from 'react';
import TopBar from './TopBar';
import ContentRowTopFn from './ContentRowTopFn';
import Footer from './Footer';
function ContentWrapper() {
    return(
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <ContentRowTopFn />
                    <Footer />
                </div>
            </div>   
        </React.Fragment>
    )
}
export default ContentWrapper;
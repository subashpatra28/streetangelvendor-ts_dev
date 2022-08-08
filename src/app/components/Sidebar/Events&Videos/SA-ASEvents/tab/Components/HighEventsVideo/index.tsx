import { useEffect, useRef, useState } from "react";
import { Row, Col, Container } from "reactstrap";
// @ts-expect-error TS(2307): Cannot find module '../../../../../assets/mp4/vide... Remove this comment to see the full error message
import vid from "../../../../../../../assets/mp4/video.mp4";
import Loc from "./Components/loc/index";
import VideoGraph from "./Components/videoGraph/index";
import { Link } from "react-router-dom";
import FullPageLoaderModal from "../../../../../../Common/FullPageLoader/FullPageLoaderModal";
import { connect } from "react-redux";
import { highEventsChannel } from "../../../../../../../constants";
import { addChatdata } from "../../../../../../../redux/reducers/DataReducer/data.actions";
import { RootState } from "../../../../../../../redux/reducers/rootReducer";
import { AppDispatch } from "../../../../../../../redux/store/store";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

function HighEventsVideo(props: Props) {
  const [inputText, setInputText] = useState("");
  const messageEl = useRef();

  useEffect(() => {
    if (messageEl) {
      // @ts-expect-error TS(2532): Object is possibly 'undefined'.
      messageEl.current.addEventListener(
        "DOMNodeInserted",
        (event: $TSFixMe) => {
          const { currentTarget: target } = event;
          target.scroll({ top: target.scrollHeight, behavior: "smooth" });
        }
      );
    }
  }, []);

  return (
    <div className="header bg-gradient-info pb-2 pt-0 pt-md-8 allPageTab">
      <FullPageLoaderModal isLoading={props.isLoading} />
      <Container className="mt--0" fluid>
        <div className="card-stats md-4 mb-xl-0 pb-1">
          <Row>
            <Col sm={12} md={6} className="videHeader tripsname tabAll">
              <Link to="#" className="tabLink">
                Having trouble in playing Video ?
              </Link>
            </Col>
            <Col sm={12} md={6} className="videHeader pageEnd tabAll tabSet">
              <Link to="#" className="tabLink">
                Download Data
              </Link>
            </Col>
          </Row>
        </div>
        <div className="card-stats md-0 pb-0 mb-xl-0 videomiddle devi">
          <Row>
            <Col className="col-lg-6 col-12 tabAll">
              <div className="vidthumbfirst">
                <div className="overlay">
                  <div className="overlayText">
                    <h2>Main Channel</h2>
                  </div>
                  <video controls className="vid">
                    <source src={vid} type="video/mp4" />
                  </video>
                </div>
              </div>
            </Col>
            {highEventsChannel.map((item) => (
              <Col className="col-lg-3 col-12 tabAll ">
                <div className={item.classChannel1}>
                  <div className="overlay">
                    <div className="overlayText">
                      <h2>{item.channel1}</h2>
                    </div>
                    <video controls className="vid">
                      <source src={item.content1} type="video/mp4" />
                    </video>
                  </div>
                </div>
                <div className={item.classChannel2}>
                  <div className="overlay">
                    <div className="overlayText">
                      <h2>{item.channel2}</h2>
                    </div>
                    <video controls className="vid">
                      <source src={item.content2} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
        <div className="card-stats md-4 mb-xl-0 videofoot devi ">
          <Row>
            <Col className="col-sm-12 tabAll" md={3}>
              <div className="boxMap colDiv1">
                <Loc />
              </div>
            </Col>
            <Col className="col-sm-12 tabAll " md={6}>
              <div className="colDiv2">
                <VideoGraph />
              </div>
            </Col>
            <Col className="col-sm-12 tabAll" md={3}>
              <div className="boxNotes colDiv3">
                <h2 className="panelHeading">Notes</h2>
                {/* @ts-expect-error */}
                <ul className="notesul" ref={messageEl}>
                  {props.chatData.map((item) => (
                    <li
                      style={{
                        textAlign: item.sent === "user" ? "right" : "left",
                      }}
                    >
                      {item.value}
                    </li>
                  ))}
                </ul>
                <>
                  <div className="chatInputBar">
                    <input
                      // @ts-expect-error TS(2322): Type '{ autocomplete: string; type: string; id: st... Remove this comment to see the full error message
                      autocomplete="disable"
                      type="search"
                      id="noteID"
                      className="chatInput"
                      placeholder="Enter Your Note"
                      onChange={(e) => setInputText(e.target.value)}
                      value={inputText}
                    />
                  </div>
                  <div className="chatSend">
                    <button
                      type="button"
                      id="noteSave"
                      className="mapvehiclebtn"
                      onClick={() => {
                        if (inputText) {
                          props.addChatdata({ value: inputText, sent: "user" });
                          setInputText("");
                        }
                      }}
                    >
                      Save
                    </button>
                  </div>
                </>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

const mapStateToProps = (state: RootState) => ({
  chatData: state.dataStore.chatData,
  isLoading: state.generalSlice.isLoading,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  addChatdata: (msg: $TSFixMe) => dispatch(addChatdata(msg)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HighEventsVideo);

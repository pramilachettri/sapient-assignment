import React, { Component } from 'react';
import './Main.css';
import { connect } from 'react-redux';
import SideNavBar from '../sidenav/SideNavBar';
import Cards from '../cards/Cards';
import { getInitialSpaceData } from '../../redux/actions/spaceActions';
import Loader from 'react-loader-spinner';
import Pagination from '../pagination/Pagination';
import Modal from 'react-modal';

class Main extends Component {
  state = {
    initialLoad: true,
    userEnteredYear: '',
    userEnteredLaunch: '',
    userEnteredLand: '',
    currentPage: 1,
    dataPerPage: 12,
    btnDisabled: true,
    filteredData: [],
    filtersBtnClick: false,
    showModal: false,
    showModalData: false,
    selected: '',
    launchSelected: '',
    landSelected: ''
  }
  componentDidMount() {
    this.props.getInitialSpaceData();
  }

  handleFiltersClick = () => {
    this.setState({ showModal: true});
  }
  closeModal =() => {
    this.setState({ showModal: false});
  }

  handleYearClick = (data) => {
    const { userEnteredLand, userEnteredLaunch } = this.state;
    this.setState({ userEnteredYear: data, selected: data});
    if(data !== '' || userEnteredLand !== '' || userEnteredLaunch !== '') {
      this.setState({ btnDisabled: false});
    }
  }

  handleLaunchClick = (data) => {
    this.setState({launchSelected: data.value});
    const { userEnteredLand, userEnteredYear } = this.state;
    let res = JSON.parse(data.name.toLowerCase());
    this.setState({ userEnteredLaunch: res});
    if(res !== '' || userEnteredLand !== '' || userEnteredYear !== '') {
      this.setState({ btnDisabled: false});
    }
  }

  handleLandClick = (data) => {
    this.setState({ landSelected: data});
    const {userEnteredLaunch, userEnteredYear } = this.state;
    let res = JSON.parse(data.toLowerCase());
    this.setState({ userEnteredLand: res});
    if(res !== '' || userEnteredLaunch !== '' || userEnteredYear !== '') {
      this.setState({ btnDisabled: false});
    }
  }

  handleSubmitClick = (e) => {
    e.preventDefault();
    const { userEnteredYear, userEnteredLaunch, userEnteredLand } = this.state;
    const { initialSpaceData } = this.props;
    this.setState({ showModalData: true, showModal: false, initialLoad: false})
    let resData = [];

    if(userEnteredYear !== '' && userEnteredLaunch === '' && userEnteredLand === '') {
      resData = initialSpaceData.filter(data => data.launch_year === userEnteredYear);
    }

    else if(userEnteredLaunch !== '' && userEnteredYear === '' && userEnteredLand === '') {
      resData = initialSpaceData.filter(data => data.launch_success === userEnteredLaunch);
    }

    else if(userEnteredLand !== '' && userEnteredYear === '' && userEnteredLaunch === '') {
      resData = initialSpaceData.filter(data => data.rocket.first_stage.cores[0].land_success === userEnteredLand);
    }

    else if(userEnteredLand !== '' && userEnteredLaunch !== '' && userEnteredYear === '') {
      resData = initialSpaceData.filter(data => data.launch_success === userEnteredLaunch && data.rocket.first_stage.cores[0].land_success === userEnteredLand);
    }

    else if(userEnteredLaunch !== '' && userEnteredYear !== '' && userEnteredLand === '') {
      resData = initialSpaceData.filter(data => data.launch_success === userEnteredLaunch &&  data.launch_year === userEnteredYear);
    }

    else if(userEnteredYear !== '' && userEnteredLand !== '' && userEnteredLaunch === '') {
      resData = initialSpaceData.filter(data => data.rocket.first_stage.cores[0].land_success === userEnteredLand &&  data.launch_year === userEnteredYear);
    }

    else {
      resData = initialSpaceData.filter(data => data.launch_success === userEnteredLaunch && data.rocket.first_stage.cores[0].land_success === userEnteredLand && data.launch_year === userEnteredYear);
    }
    this.setState({ filteredData: resData, userEnteredLand: '', userEnteredLaunch: '', userEnteredYear: '', selected: '', landSelected: '', launchSelected: '', btnDisabled: true});
  }
  
  render() {
    const { initialSpaceData, loading } = this.props;

    const { initialLoad, userEnteredYear, userEnteredLaunch, userEnteredLand, currentPage,  dataPerPage, btnDisabled, showModalData, showModal, filteredData, selected, launchSelected, landSelected } = this.state;

    const { handleLandClick, handleLaunchClick, handleYearClick , handleFiltersClick, closeModal, handleSubmitClick } = this;

    const indexOfLastData = currentPage * dataPerPage;
    const indexOfFirstData = indexOfLastData - dataPerPage;
    const currentData = initialSpaceData.slice(indexOfFirstData, indexOfLastData);
  
    const paginate = pageNumber => this.setState({currentPage: pageNumber});
    
    //initial data
    const getData = (sd) => {
      return (<Cards key={sd.launch_date_unix}
        mission_name={sd.mission_name} 
        flight_number={sd.flight_number}
        mission_id={sd.mission_id}
        launch_year={sd.launch_year}
        rocket={sd.rocket.first_stage.cores[0].land_success === true ? 'True' : (sd.rocket.first_stage.cores[0].land_success === false ? 'False' : 'N/A')}
        links={sd.links.mission_patch_small}
        launch_success={sd.launch_success === true ? 'True' : 'False'}
      />)
    };

    const initialData = currentData.map(sd => getData(sd));

    //filters data
    const filtersData = filteredData.map(sd => getData(sd));

    let loader = (
      <div style={{textAlign: 'center'}}>
        <Loader type="Circles" color="#00BFFF" height={80} width={80}/>
        <h2>Loading Data..Please Wait</h2>
      </div>
    );

    return (
      <div className="main-content">
        <h2 className="space-launch">SpacEx Launch Programs</h2>
        <SideNavBar 
          handleLaunchClick={handleLaunchClick} 
          handleYearClick={handleYearClick}
          handleLandClick={handleLandClick}
          handleFiltersClick={handleFiltersClick}
          isDisabled={btnDisabled}
          selected={selected}
          launchSelected={launchSelected}
          landSelected={landSelected}
        />
        <div className="main-child-div">
          { loading && loader }
          { initialLoad && initialData }
          { showModalData && filtersData && filtersData.length === 0 ? <h3 style={{ textAlign: 'center'}}>No Data Found for the Applied Filters....</h3> : filtersData }
          { initialLoad && <Pagination
            dataPerPage={dataPerPage}
            totalData={initialSpaceData.length}
            paginate={paginate} />
          }
          { showModal && 
            <Modal isOpen={showModal}
              contentLabel="Minimal Modal Example" ariaHideApp={false}>
                Filters Selected:<br/><br/> 
              { userEnteredYear !== '' ? <b>{`Launch Year: ${userEnteredYear}`}</b> : 'Launch Year: Not Selected'} <br />
              { userEnteredLaunch !== '' ? <b>{` Successfull Launch : ${userEnteredLaunch}`}</b> : 'Successfull Launch: Not Selected'}<br />
              { userEnteredLand !== '' ? <b>{`Successfull Landing: ${userEnteredLand}`}</b> : 'Successfull Landing: Not Selected'}<br/><br/>
              <button onClick={handleSubmitClick} className="Ok-modal">OK</button>
              <button onClick={closeModal} className="close-modal">Close</button>
            </Modal>
          }
        </div>
        <h4 className="align-developer">Developed By: Pramila Basnet</h4>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialSpaceData: state.space.initialData,
  loading: state.space.loading
});

export default connect(
  mapStateToProps, {
    getInitialSpaceData
  }
)(Main);
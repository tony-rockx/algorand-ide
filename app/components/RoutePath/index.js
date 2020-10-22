/**
 *
 * RoutePath
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';


import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';

import Input from './Input';

let iconRouteArrow = <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAAaUlEQVRYhe3VMQqDQBAF0EcsPUXA+3gDr+phtk+XMmihZYpokEH4D6bYZv8szO4SEVGsu3j/CW+8Ls75asQHDUNFAz1mLGniNk0sex1dn6mGJzz+OdadlM5BwsuuX/lTzPYZlYVHRPxkBSG+M94FtWAlAAAAAElFTkSuQmCC"/>

let iconTick = <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAAhklEQVRYhe2UUQqAIBBE3yksuqIdN7JOUx8JiUSo6BqxD/bXmV1nFxRFkWUEbE9xBxzALC0+AIsX34BJxVVcxT8rbrkORi7hkXGFbzAXPlBFHMBwj3AnbYTV/zzHRLPApZhonvY3E2Kr9mRCfM/jhFdJey7hJLpcOLi6XX2JdR5jfCnKvzgB4/dKWeb1iEcAAAAASUVORK5CYII="/>

function RoutePath(props) {
  const {
    onChangeAddress,
    onChangeAmount,
    addressOption,
    walletPage,
    routeSenders,
    onChangeAtomicAmount,
    onChangeAtomicSenderAddress,
    onChangeAtomicReceiverAddress,
    onChangeAtomicAssetType,
    onChangeAtomicAssetId,
  } = props;
  
  // console.log();
  const optionsAsset = [
    { value: 'algo', label: 'ALGO' },
    { value: 'asa', label: 'ASA' },
  ]
  
  const path = routeSenders.map((address, index) =>
    <div key={index}>
      <div className="routePath">
        <div className="routeSender">
          <div className="routeTitle">
            Sender:
          </div>
          <div className="routeEntry">
            <div className="selectComponent">
              <Select
                name={"sender_" + index}
                onChange={(evt) => onChangeAtomicSenderAddress([evt, index])}
                options={addressOption}
                value={{ label: address[0], value: address[0] }}
              />
            </div>
          </div>
        </div>
        <div className="routeArrow">
          {iconRouteArrow}
        </div>
        <div className="routeReceiver">
          <div className="routeTitle">
            Receiver:
          </div>
          <div className="routeEntry">
            <div className="selectComponent">
              <CreatableSelect
                isClearable
                name={"receiver_" + index}
                onChange={(evt) => onChangeAtomicReceiverAddress([evt, index])}
                options={addressOption}
                value={{ label: address[1], value: address[1] }}
              />
            </div>
          </div>
        </div>
        <div className="routeArrow">
          {iconRouteArrow}
        </div>
        <div className="clear"></div>
        <div>
          <div className="routeAssetType">
            <div className="routeTitle">
              Asset Type:
            </div>
            <div className="routeEntry">
              <Select
                name={"assetType_" + index}
                onChange={(evt) => onChangeAtomicAssetType([evt, index])}
                options={optionsAsset}
                defaultValue={optionsAsset[0]}
              />
            </div>
          </div>
          <div className={(address[3] == "asa") ? "routeArrow" : "hide"}>
            {iconRouteArrow}
          </div>
          <div className={(address[3] == "asa") ? "routeAmount" : "hide"}>
            <div className="routeTitle">
              ASA id:
            </div>
            <div className="routeEntry">
              <Input
                id="assetId"
                type="text"
                name={"assetId_" + index}
                onChange={onChangeAtomicAssetId}
                value={address[4]}
              />
            </div>
          </div>
          <div className="routeArrow">
            {iconRouteArrow}
          </div>
          <div className="routeAmount">
            <div className="routeTitle">
              Amount <span className="assetType">{(!address[3]) ? "ALGO" : address[3]}</span>:
            </div>
            <div className="routeEntry">
              <Input
                id="amount"
                type="text"
                name={"amount_" + index}
                onChange={onChangeAtomicAmount}
                value={address[2]}
              />
            </div>
          </div>
        </div>
        <div className="routeStatus hide">
          {iconTick}
        </div>
        <div className="clear"></div>
      </div>
    </div>
  );
  
  return (
    <div>
      {path}
    </div>
  );
}

RoutePath.propTypes = {
  routeSenders: PropTypes.array
};

export default RoutePath;

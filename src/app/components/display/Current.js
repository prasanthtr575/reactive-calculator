import React from 'react';

export const Current = (props) => {
	var displayNum = props.num ? props.num : "0.0";

	return (
        <div className="row">
          <div className="col-sm-12 num-display">
              {displayNum}
          </div>
        </div>
	)
};

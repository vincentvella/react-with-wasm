import React from 'react'

interface Unloaded {
  loading: boolean;
}

const Unloaded = ({ loading }: Unloaded) => {
 return loading ? <div>Loading...</div> : null
};

export default Unloaded;
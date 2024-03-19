import React from 'react';
import {View} from 'react-native';
import {Circle, Path} from 'react-native-svg';
import {Grid, LineChart, XAxis, YAxis} from 'react-native-svg-charts';

const Context = React.createContext({
  color: 'rgb(134, 65, 244)',
});

type Data = {
  label: string;
  value: number;
};

type Props = {
  data: Data[];
  color: string;
};

const dataDefault = Array.from({length: 5}, () =>
  Math.floor(Math.random() * 100),
).map((value, index) => ({
  label: 'W' + index,
  value,
}));

const Decorator = ({x, y, data}: {x?: any; y?: any; data?: number[]}) => {
  const {color} = React.useContext(Context);
  return data?.map((value, index) => (
    <Circle
      key={index}
      cx={x(index)}
      cy={y(value)}
      r={4}
      stroke={color}
      fill={'white'}
    />
  ));
};

const Line = ({line}: {line: string}) => {
  const {color} = React.useContext(Context);
  return <Path d={line} stroke={color} fill={'none'} />;
};

export default function AxesChart({
  data: dataForCharts = dataDefault,
  color = '#1AE13A',
}: Props) {
  const contextValue = React.useMemo(() => ({color}), [color]);

  const data = dataForCharts?.map(item => item.value);
  const labels = dataForCharts?.map(item => item.label);

  const axesSvg = {fontSize: 9, fill: 'grey'};
  const verticalContentInset = {top: 10, bottom: 10};
  const xAxisHeight = 30;
  return (
    <Context.Provider value={contextValue}>
      <View style={{height: 200, flexDirection: 'row'}}>
        <YAxis
          data={data}
          style={{marginBottom: xAxisHeight, width: 30}}
          contentInset={verticalContentInset}
          svg={axesSvg}
        />
        <View style={{flex: 1, marginLeft: 5}}>
          <LineChart
            style={{flex: 1}}
            data={data}
            contentInset={verticalContentInset}
            svg={{stroke: 'rgb(134, 65, 244)'}}>
            <Grid />
            <Decorator />
            <Line />
          </LineChart>
          <XAxis
            style={{marginHorizontal: -10, height: xAxisHeight}}
            data={data}
            formatLabel={(value, index) => labels[index]}
            contentInset={{left: 10, right: 10}}
            svg={axesSvg}
          />
        </View>
      </View>
    </Context.Provider>
  );
}

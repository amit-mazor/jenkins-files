import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Sector } from 'recharts';

const data = [
  { name: 'Success', value: 400 },
  { name: 'Failed', value: 300 },
  { name: 'UnknownFileType', value: 60 },
  { name: 'Pending', value: 200 },
];

const colors = ["#229954", "#C70039", "#FFC300", "#303F9F"];

const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
      cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
      fill, payload, percent, value,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';
  
    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`Value: ${value}`}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
          {`Pct. ${(percent * 100).toFixed(2)}%`}
        </text>
      </g>
    );
  };

const UploadStatusPie = ({onMouse, activeIndex, isVisible}) => {

    if(!isVisible) {
        return null;
    }

    return (
        <ResponsiveContainer height={500} width="100%">
            <PieChart>
                <Pie
                    activeIndex={activeIndex}
                    activeShape={renderActiveShape}
                    data={data}
                    innerRadius={160}
                    outerRadius={200}
                    startAngle={90} 
                    endAngle={450}
                    paddingAngle={2}
                    dataKey="value"
                    onMouseEnter={onMouse}
                >
                {
                    data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index]}/>
                ))
                }
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
}

export default UploadStatusPie;
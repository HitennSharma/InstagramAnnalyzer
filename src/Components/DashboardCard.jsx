import React from 'react';

const containerStyle = {
  padding: '20px',
};

const sectionStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  marginBottom: '20px',
  padding: '10px',
};

const titleStyle = {
  fontSize: '1.5em',
  marginBottom: '10px',
};

const statsStyle = {
  fontSize: '1.2em',
};

const graphStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '10px',
  height: '150px',
  position: 'relative',
};

const engagementStyle = {
  fontSize: '1.2em',
  marginBottom: '10px',
};

const postStyle = {
  marginBottom: '10px',
};

const chartStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '10px',
  height: '150px',
  position: 'relative',
};

const InstagramDashboard = () => {
  return (
    <div style={containerStyle}>
      <div style={sectionStyle}>
        <h2 style={titleStyle}>Instagram Overview</h2>
        <div style={statsStyle}>Followers: 10,000 ▲</div>
        <div style={statsStyle}>Total Likes: 50,000 ▲</div>
        <div style={statsStyle}>Total Comments: 12,000 ▲</div>
      </div>

      <div style={sectionStyle}>
        <h2 style={titleStyle}>Followers Growth Over Time</h2>
        <div style={graphStyle}>
          <div style={{ ...chartStyle, height: '100%' }}></div>
          {/* Here you would render your graph */}
        </div>
      </div>

      <div style={sectionStyle}>
        <h2 style={titleStyle}>Engagement Rate by Post</h2>
        <div style={engagementStyle}>
          <div style={postStyle}>
            <strong>Post 1:</strong> Likes: 1,200 | Comments: 300
          </div>
          <div style={postStyle}>
            <strong>Post 2:</strong> Likes: 900 | Comments: 200
          </div>
        </div>
      </div>

      <div style={sectionStyle}>
        <h2 style={titleStyle}>Top-Performing Posts</h2>
        <div style={postStyle}>
          <div>[Thumbnail 1] Post 1: Likes: 1,200 | Comments: 300</div>
        </div>
        <div style={postStyle}>
          <div>[Thumbnail 2] Post 2: Likes: 900 | Comments: 200</div>
        </div>
      </div>

      <div style={sectionStyle}>
        <h2 style={titleStyle}>Content Type Distribution</h2>
        <div>Photos: 60%</div>
        <div>Videos: 30%</div>
        <div>Reels: 10%</div>
      </div>

      <div style={sectionStyle}>
        <h2 style={titleStyle}>Best Time to Post Insights</h2>
        <div style={graphStyle}>
          <div style={{ ...chartStyle, height: '100%' }}></div>
          {/* Here you would render your chart */}
        </div>
      </div>
    </div>
  );
};

export default InstagramDashboard;

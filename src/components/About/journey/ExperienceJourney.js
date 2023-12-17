import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { MdOutlineStar } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";

function ExperienceJourney() {
  return (
    <div className="mt-5">
      <div className="mt-5">
        <h1>Experience Journey</h1>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "white" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="Aug 2019 - May 2021"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<FaUserAlt />}
        >
          <h5 className="vertical-timeline-element-title" style={{ color: "#fbd9ad" }}>
            Accenture (Pvt.) Limited
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2" style={{ color: "#fbd9ad" }}>
            Virtual shopping - ( role: Unity developer )
          </h6>
          <p>• I led an XR project, securing second place in the Accenture All Indian Innovation Contest 2021.</p>
          <p>• Using C# and Unity, I created an immersive environment where users navigate aisles, interact with products and place items within their carts.</p>
          <p>• Users can generate bills at virtual checkout counters, receiving receipts directly via email for hassle-free payment processing.</p>
          <h6 className="vertical-timeline-element-subtitle mt-2" style={{ color: "#fbd9ad" }}>
            SynOps - ( role: MERN developer )
          </h6>
          <p>• Draws on data and insights from more than 1,000 Accenture client engagements.</p>
          <p>• Recommended and implemented design revamp and improvement of authentication system of project.</p>
          <p>• Implemented REST APIs for data presentation in the UI</p>
          <p>• Managed navigation using React Router Dom, state managment by redux store.</p>
          <p>• Wrote smooth and sustainable code that is scalable and altered.</p>
          <p>• Monitored and enhancing overall performance by migrating class to function and lazy</p>
          <p>• Recommended and implemented design revamp and improvement of Authentication System of project; optimized user experience and system functionality.</p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "white" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="May 2021 - present"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<FaUserAlt />}
        >
          <h5 className="vertical-timeline-element-title" style={{ color: "#fbd9ad" }}>
            Kaplan India (Pvt.) Limited
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2" style={{ color: "#fbd9ad" }}>
            Total Access CE - ( role: React developer )
          </h6>
          <p>• Analysed business requirements and created user-friendly UX/UI.</p>
          <p>• Utilized React hooks and graphql to ensure real-time updates for users, displaying content.</p>
          <p>• Created reusable UI components with React with styled components.</p>
          <p>• Optimized the application's performance using code splitting, lazy loading, and memoization techniques to enhance speed and reduce initial load times</p>
          <p>• Employed Jest and React Testing Library for unit testing and end-to-end testing frameworks to ensure code reliability and maintainability.</p>
          <p>• Ensured consistent UI across different browsers by employing CSS resets and vendor-specific styling adjustments.</p>

          <h6 className="vertical-timeline-element-subtitle mt-2" style={{ color: "#fbd9ad" }}>
            SCSS Migration - ( role: React developer )
          </h6>
          <p>• After migrating the standard CSS to SCSS, the performance showed a substantial 10% improvement, enhancing the application's efficiency and styling capabilities.</p>

          <h6 className="vertical-timeline-element-subtitle mt-2" style={{ color: "#fbd9ad" }}>
            Accessibility & Responsive - ( role: React developer )
          </h6>
          <p>• I spearheaded the implementation of comprehensive accessibility enhancements, resulting in a remarkable 60% improvement in the overall accessibility of the application.</p>
          <p>• I successfully implemented responsive design techniques, enabling seamless adaptability across devices, while also ensuring Chrome's responsiveness for an enhanced user experience</p>

          <h6 className="vertical-timeline-element-subtitle mt-2" style={{ color: "#fbd9ad" }}>
            Study Calendar - ( role: React and React Native developer )
          </h6>
          <p>• Led the development effort, responsible for architecting the application's structure and core functionalities using React.</p>
          <p>• Leveraged GraphQL's caching capabilities to efficiently manage and store data, enhancing the application's performance by reducing unnecessary network requests.</p> 
          <p>• Addressed performance bottlenecks by optimizing rendering, reducing unnecessary re-renders, and implementing efficient state management techniques.</p>
          <p>• Engineered a React study calendar application ensuring cross-compatibility, full responsiveness, and accessibility across multiple devices for an optimized user experience.</p>
          <p>• Implemented the same project in react native with redux as state management.</p>

          <h6 className="vertical-timeline-element-subtitle mt-2" style={{ color: "#fbd9ad" }}>
          Performance Tracker and Dark theme - ( role: React Native developer )
          </h6>
          <p>• Took the ownership of Performance Tracker where students can track their progress and compare score with avg.</p>
          <p>• Leveraged TypeScript for robust typing, ensuring data integrity and minimizing errors in the performance tracker module.</p>
          <p>• Quantify the impact of the performance tracker and dark theme, improved user engagement by 23%. We got opportunity to demo in all hand meeting</p>
          <p>• Migrated standard styled components to scss, implemented the dark theme.</p>

          <h6 className="vertical-timeline-element-subtitle mt-2" style={{ color: "#fbd9ad" }}>
            React Upgrade - ( role: React developer )
          </h6>
          <p>• Led the upgrade process from 16.13 to 18.2 of React within the project's codebase.</p>
          <p>• Conducted comprehensive analysis and optimization of project packages/modules post-React upgrade.</p>
          <p>• Implemented strategic improvements resulting in a notable 15% increase in overall performance metrics.</p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<MdOutlineStar />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default ExperienceJourney;

export const getStudentProfile = async (req, res) => {
  try {
    res.status(200).json({
      message: "Student profile fetched successfully",
      user: req.user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
};